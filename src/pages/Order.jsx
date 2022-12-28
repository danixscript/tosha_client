import '../css/App.css';
import '../css/placeorder.css';
import {useDispatch,useSelector} from "react-redux";

import { useLocation,Navigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrderById, getOrderInfoBYID, payNow, userSeeTheOrderNow } from '../Redux/Actions/ordersActions';
import PlaceOrderForm from '../components/order/PlaceOrderForm';

function Order(props) {
const user =  useSelector((state)=>state.users);
const order =  useSelector((state)=>state.orders);
const dispatch = useDispatch();
const [OrderStats,setOrderStats] = useState(false)
const [someFliper,setsomeFliper] = useState(false)
const [isbut,setIsByt] = useState(false)

let location = useLocation();
  let totalpp = 0
useEffect(()=>{
  setsomeFliper(false)
  setOrderStats(false)
  setIsByt(false)
totalpp = 0
dispatch(getOrderInfoBYID(location.state.orderid))
},[location.state.orderid])

function gotit(e){
  dispatch(userSeeTheOrderNow(e))

}

function paynow(){
  setsomeFliper(true)
  dispatch(payNow({orderid:location.state.orderid,userid:user.user.id}))
  setIsByt(true)
}
if (isbut) {
  return <Navigate to={{ pathname: "/thankpage" }}  />;
}


  return ( 
    <div className=" paddingPage flexcol center ">

 <h1>order</h1>
 
  
{order.notActiveOrderInfo.length >0?
<div className=" flexrow  ">
{order.notActiveOrderInfo.map((e)=>{
            totalpp = totalpp + ( e.userproductprice * e.userproductquantity)
            if(!OrderStats && e.uptofiftin == null){
              setOrderStats(true)
            }

  return(
<div className="ordertable">
<div className={e.active == 1 ? " flexrow center bcgreen " : "  flexrow center"}>
      <p className="textmail">{( e.userproductprice * e.userproductquantity)}</p>
      <p className="textmil">{e.userproductid}</p>  
      <p className="textmil">{e.userproductquantity}</p>
      <p className="textmil">{e.userproductname}</p>
      <p className="textmil">{e.userproductprice}</p>   
      <img src={e.userproductimg} alt="" className="img imgyy" />
    </div>
    
</div>
  )
})}
<br />

<div className="orderStatus">


  {
  (()=>{
    if(order.notActiveOrderInfo[0].active == 1){
      return(
        <h4>ההזמנה הושלמה ושולמה</h4>
      )

    }else if(order.notActiveOrderInfo[0].uptofiftin == 1 && order.notActiveOrderInfo[0].active == 0 ){
      return(
      <h4 className=""> 'הזמנה לא אושרה עדין'</h4> 
      )
    }
    else if (order.notActiveOrderInfo[0].uptofiftin == 0 && order.notActiveOrderInfo[0].active == 0){
return(
  <div className="formpay">
  <PlaceOrderForm buyItem={paynow} />
  {totalpp }שח
</div>
)
    }else if(order.notActiveOrderInfo[0].uptofiftin === null){
      return(
<div className="">
<h1 className="a">הזמנה מבוטלת </h1>
<button onClick={()=>{gotit(order.notActiveOrderInfo[0])}} >הבנתי תודה</button>

</div>

)
    }
  })()
  }





</div>

</div>



 :''}




   
 
    </div>
  );
}

export default Order;
