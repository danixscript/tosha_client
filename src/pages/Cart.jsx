import "../css/App.css";
import "../css/cart.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/Actions";
import axiosConfig from "../config/AxiosConfig";
import CartComp from "../components/cart/CartComp";
import Total from "../components/cart/Total";
import { Navigate } from "react-router-dom";
import { messageAction } from "../Redux/Actions/errAction";
import { setTotal } from "../Redux/Actions/cartAction";
import PopUpTA from "../components/popup/PopUpTA";

function Cart(props) {
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
    dispatch(messageAction({type:'good',msg:"plus one always fun"}))
  }


  function deleteall(e) {
    dispatch({ type: actionTypes.DELETE_ALL, data: e.id });
    dispatch(messageAction({type:'good',msg:"minus one pretty sucks for a guy like you"}))

  }

  function decreamNum(e) {
  
    dispatch({ type: actionTypes.REMOVE_PRODUCT, data: e });
    dispatch(messageAction({type:'good',msg:"minus one pretty sucks for a guy like you"}))

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
    return <Navigate to="/shipping"  />
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
      

  <div className="cartDesign flexrow w100 bet">
    <div className="leftCartImg minh500 ">

    </div>
  <div className="cartcom paddingbottom50">
  <CartComp
        buyproduct={buyproduct}
        deleteall={deleteall}
        setAmount={setAmount}
        decreamNum={decreamNum}
        increamNum={increamNum}
        isActive={navPopUp}
        cart={card.cardItems}
      />
  </div>
<div className="rightCartImg minh500"></div>
  </div>
  <PopUpTA closenow={closePopUp} activePopUp={activePopUp}  getOrderType={getOrderType} />
      
    </div>
  );
}

export default Cart;
