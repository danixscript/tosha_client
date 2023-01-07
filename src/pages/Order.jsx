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
const [textState, setTtextState] = useState("");
const [isUnderstand,setisUnderstand] = useState(false)




function gettext(e){
  setTtextState(e.target.value)
}
let location = useLocation();
  let totalpp = 0
useEffect(()=>{
  setsomeFliper(false)
  setOrderStats(false)
  setisUnderstand(false)
  setIsByt(false)
totalpp = 0
dispatch(getOrderInfoBYID(location.state.orderid))
},[location.state.orderid])

function gotit(e){
  setisUnderstand(true)
  order.notActiveOrderInfo[0].usersee = 0
  dispatch(userSeeTheOrderNow(e))

}

function paynow(){
  setsomeFliper(true)
  dispatch(payNow({orderid:location.state.orderid,userid:user.user.id,text:textState}))    
  setIsByt(true)
}
if (isbut) {
  return <Navigate to={{ pathname: "/thankpage" }}  />;
}


  return ( 
    <div className=" paddingPage flexcol  minpage w70 drtl">

 <h1>פירוט הזמנה</h1>
 
  
{order.notActiveOrderInfo.length >0?
<div className=" flexcol w100 h100 ">

{order.notActiveOrderInfo.map((e)=>{
            totalpp = totalpp + ( e.userproductprice * e.userproductquantity)
            if(!OrderStats && e.uptofiftin == null){
              setOrderStats(true)
            }

  return(
<div className="orderinfott    ">
<div className="flexcol w100">

<div className="maxh600">
  
<div className={(()=>{
  if(e.active == 1){
    return 'bordergreen  flexrow center'
  }else if(e.active == 0 && e.uptofiftin == null){
    return 'borderred  flexrow center'
  }else if(e.active == 0 && e.uptofiftin == 1){
    return 'borderyellow  flexrow center'
  }else{
    return 'flexrow center'
  }
})()}>
      
     
   
      <p className="p textpad">{e.userproductname}</p>  
      <p className="p textpad">{e.userproductprice} ש"ח</p>  
      <img src={e.userproductimg} alt="" className="img imgyy maxxh" />

      <p className="p textpad">ש"ח  {( e.userproductprice * e.userproductquantity)}</p> 
      <p className="p textpad">כמות:{e.userproductquantity}</p>
    </div>
</div>
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
  <div className="formpay w70">
<div className="flexcol">
<label htmlFor="">הערות למסעדה</label>
      <textarea name="" onChange={gettext} id="" cols="30" rows="10"></textarea>
      <label htmlFor="">פרטי אשראי</label>
      <PlaceOrderForm buyItem={paynow} />
</div>

  
  {totalpp }שח
</div>
)
    }else if(order.notActiveOrderInfo[0].uptofiftin === null){
      return(
<div className="">
<h1 className="a">הזמנה מבוטלת </h1>


{order.notActiveOrderInfo[0].usersee ==0? 
<h3>תודה על ההבנה</h3>

:
<button onClick={()=>{gotit(order.notActiveOrderInfo[0])}} >הבנתי תודה</button>}

</div>

)
    }
  })()
  }





</div>
</div>
    
</div>
  )
})}
<br />



</div>



 :''}




   
 
    </div>
  );
}

export default Order;
