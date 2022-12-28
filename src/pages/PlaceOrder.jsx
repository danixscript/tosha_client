import "../css/App.css";
import "../css/placeorder.css";
import CostumerInfo from "../components/order/CostumerInfo";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import Paybox from "../components/order/Paybox";
import axiosConfig from "../config/AxiosConfig";
import * as actionTypes from "../store/Actions";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { clear } from "../Redux/Actions/cartAction";
import TablePlaceOrder from "../components/tables/TablePlaceOrder";
import PlaceOrderForm from "../components/order/PlaceOrderForm";
import { setOrderRedy, waitForRespons } from "../Redux/Actions/ordersActions";
import { useEffect } from "react";

function PlaceOrder(props) {
  const user = useSelector((state) => state.users);
  const item = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.orders);
  const err = useSelector((state) => state.err);
  const dispatch = useDispatch();
  const [isbut, setisbuy] = useState(false);
  const [sumorder, setSumOrder] = useState(0);

  const [peopleCount, setPeupleCount] = useState({ upto15: false, howmeny: 1 });
  const [istheuserChoose, setistheuserChoose] = useState(false);
  const [idid, setidid] = useState(0);
  let location = useLocation();

  function goBackto() {
    setPeupleCount({ upto15: false, howmeny: 0 });
    setistheuserChoose(false);
  }

  useEffect(() => {
    dispatch(setOrderRedy(item));
  }, [item]);

  function getPepuleCount(e) {
    setistheuserChoose(true);
    if (e.target.value > 15) {
      let a = orders
      setPeupleCount({ upto15: true, howmeny: e.target.value });
      dispatch(
        waitForRespons({
          item: item,
          user: user,
          ordertype: location.state.type,
          active: false,
          peopleCount: true,
          sumorder: sumorder,
        })
      );
    } else {
      setPeupleCount({ upto15: false, howmeny: e.target.value });
    }
  }

  async function buyItem(e) {
    e.preventDefault();

    await axiosConfig
      .post("/users/neworder", {
        item: item,
        user: user,
        ordertype: location.state.type,
        active: true,
        peopleCount: peopleCount.upto15,
      })
      .then((res) => {
        if (res.data.err) {
          dispatch({ type: actionTypes.BAD_MESSAGE, data: res.data.err.msg });
        } else {
          setisbuy(true);
          dispatch(clear());
        }
      })
      .catch((err) => {
        dispatch({ type: actionTypes.BAD_MESSAGE, data: err.message });
      });
  }

  if (isbut) {
    return <Navigate to={{ pathname: "/thankpage" }} state={{ data: idid }} />;
  }

  return (
    <div className=" paddingyakuza  ">
      <h1> {location.state.type == "TA" ? "TAהזמנה ב  " : "הזמנה בלשבת"}</h1>

      <div className="flexrow bet w100">
        <div className="orderside">
          <TablePlaceOrder rows={item.cardItems} />
        </div>

        <div className="formSide w50now flexcol ">
          {location.state.type == "TA" ? (
            <div className="form  ">
              <PlaceOrderForm buyItem={buyItem} />
              {orders.orderTotalPrice}שח
            </div>
          ) : (
            <div className="selectPeuple flexcol ">
              <div className="form">
                {!istheuserChoose ? (
                  <div className="o">
                    <h1>כמה אנשים תהיו</h1>

                    <select onChange={getPepuleCount} name="" id="">
                      <option value="1">1-2</option>
                      <option value="5">5-8</option>
                      <option value="14">10-14</option>
                      <option value="16">15-20</option>
                    </select>
                  </div>
                ) : (
                  <div className="">
                    {peopleCount.upto15 ? (
                      <div className="wait">
                        {err.msg ? (
                          err.msg
                        ) : (
                          <h3>כבר נעדכן אותך מה קורה........</h3>
                        )}
                      </div>
                    ) : (
                      <div className="form  ">
                        <div onClick={goBackto} className="back">
                          --_-
                        </div>
                        <h1> אנה הזינו פרטי תשלום </h1>

                        <PlaceOrderForm buyItem={buyItem} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
