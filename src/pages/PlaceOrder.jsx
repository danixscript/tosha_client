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
  const [countPepul, setPepurCou] = useState(0);
  const [textState, setTtextState] = useState("");

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
  
    setPepurCou(e.target.value)
   
  }

  function gettext(e){
    setTtextState(e.target.value)
  }

  function getPepuleCountClick(){
    setistheuserChoose(true);
    if (countPepul > 15) {
      let a = orders
      setPeupleCount({ upto15: true, howmeny:countPepul });
      dispatch(
        waitForRespons({
          item: item,
          user: user,
          ordertype: location.state.type,
          active: false,
          peopleCount: true,
          sumorder: sumorder,
          text:textState
        })
      );
    } else {
      setPeupleCount({ upto15: false, howmeny: countPepul });
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
        text:textState
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
    <div className=" paddingyakuza  minpage">
      <h1> {location.state.type == "TA" ? "TAהזמנה ב  " : "הזמנה בלשבת"}</h1>

      <div className="flexrow bet w100">
        <div className="orderside">
          <TablePlaceOrder rows={item.cardItems} />
        </div>

        <div className="formSide w50now flexcol ">
          {location.state.type == "TA" ? (
            <div className="form  ">
                <textarea name="" onChange={gettext} id="" cols="30" rows="10"></textarea>

              <PlaceOrderForm buyItem={buyItem} />
              {orders.orderTotalPrice}שח
            </div>
          ) : (
            <div className="selectPeuple flexcol ">
              <div className="form">
                {!istheuserChoose ? (
                  <div className="o">
                    <h1>כמה אנשים תהיו</h1>

                   <input onChange={getPepuleCount} type="number" max={0} /> <button onClick={getPepuleCountClick}>שלח</button>
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
                         חזור אחורה
                        </div>
                        <h1> אנה הזינו פרטי תשלום </h1>
                        <h5>הערות נוספות?</h5>
                        <textarea name="" onChange={gettext} id="" cols="30" rows="10"></textarea>

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
