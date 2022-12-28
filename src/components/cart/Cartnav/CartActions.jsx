import "../../../css/App.css";
import "../../../css/cart.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../../store/Actions";
import axiosConfig from "../../../config/AxiosConfig";
import CartComp from "../../../components/cart/CartComp";
import Total from "../../../components/cart/Total";
import { Navigate } from "react-router-dom";
import { messageAction } from "../../../Redux/Actions/errAction";
import { setTotal } from "../../../Redux/Actions/cartAction";
import PopUpTA from "../../../components/popup/PopUpTA";
import CartNavSide from "./CartNavSide";

function CartActions(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users); 
  const card = useSelector((state) => state.cart);
  const [navPopUp, setNavPopUp] = useState(false);
  const [neddToLogState, setNeedToLog] = useState(false);
  const [GoOnState, setGoOn] = useState(false);
  const [amountState, setAmount] = useState(1);
  const [orderTypeState, setOrderTypeState] = useState("");
  const [activePopUp, setactivePopUp] = useState(false);

  function increamNum(e) {
    dispatch({ type: actionTypes.ADD_PRODUCT, data: e });
    dispatch(messageAction({type:'good',msg:"הוספת כמות למוצר"}))
  }


  function deleteall(e) {
    dispatch({ type: actionTypes.DELETE_ALL, data: e.id });
    dispatch(messageAction({type:'good',msg:"הורדת מוצר מהעגלה "}))

  }

  function decreamNum(e) {
    dispatch({ type: actionTypes.REMOVE_PRODUCT, data: e });
    dispatch(messageAction({type:'good',msg:"הורדת כמות ממצור"}))

  }

  function closePopUp(){
    setactivePopUp(false)
  }


  function buyproduct(e) {
    if (user.isLog) {
      setactivePopUp(true)

      // dispatch(setTotal(e.target.id))
      // console.log(card)
      // setGoOn(true)
      
    } else {
      setNeedToLog(true);
    }
  }

  if(GoOnState){
    return <Navigate to="/paypage"  />
  }

  if (neddToLogState) {
    return <Navigate state={"way to buy"} to="/login" />;
  }



  function getOrderType(e){
    setOrderTypeState(e)
 }

  return (
    <div className="   ">
      <Total cart={card.cardItems} />
      
  <div className=" ">
  <CartNavSide
        buyproduct={buyproduct}
        deleteall={deleteall}
        setAmount={setAmount}
        decreamNum={decreamNum}
        increamNum={increamNum}
        isActive={navPopUp}
        cart={card.cardItems}
        closenavbar={props.closenavbar}
      />
  </div>
  
      
    </div>
  );
}

export default CartActions;
