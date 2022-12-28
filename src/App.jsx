import './App.css';
import './css/media.css';
import {  NavLink } from "react-router-dom";

import NavRoute from './navbar/NavRoute';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "./store/Actions";
import { stillConnected } from './Redux/Actions/userAction';
import { getAllMyNotActiveOrders } from './Redux/Actions/ordersActions';
import {clearErrState} from './Redux/Actions/errAction'
import Logo from './image/a2.jpeg'


function App() {
  const err = useSelector((state) => state.err);
  const user = useSelector((state) => state.users);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(stillConnected())  
    dispatch({type:actionTypes.SET})  


  },[])

  useEffect(()=>{
    const intervalCall = setInterval(() => {
      checkUserOrders()
    }, 15000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };

  },[user.isLog])
   
function closeError(){
  dispatch(clearErrState())
}
  function checkUserOrders(){
    if(user.isLog){
      dispatch(getAllMyNotActiveOrders(user.user.id))
    }
  }


  return (
    <div className="App">
      <div className={err.active_message?"consoleMessage zindexlong":"disableConsole zindexlong"}>
        <button onClick={closeError}>סגור מסך </button>
        <h1>הודעה :0::001</h1>
        <div className={err.type == 'good' ? "goodmsg":''}>
          <p>{err.msg}</p>
        </div>
      </div>



                
<div className="  ">







  <div className="positionorders">
  {orders.is_notActiveOrders?
  <div className="ordersWaiting flexcol h100">
     {orders.notActiveOrders.map((e)=>{
      return(
<div >

  {
    (()=>{
      if(e.uptofiftin == null && e.usersee == 1){
        return(
        <p>  <NavLink key={e.id} className='orderslinksside denaid' to='/orders' state={{orderid:e.id}} >ההזמנה מבוטלת--{e.orderprice}שח -- {e.id}</NavLink></p>

        )
      }
      else if (e.uptofiftin == 1){
return(
  <NavLink key={e.id} className='orderslinksside waiting' to='/orders' state={{orderid:e.id}} >ההזמנה בהמתנה--{e.orderprice}שח -- {e.id}</NavLink>

)
      }else if (e.uptofiftin == 0){
return(
  <NavLink key={e.id} className='orderslinksside accept' to='/orders' state={{orderid:e.id}} >ההזמנה אושרה בואוא לשלם -- {e.orderprice}שח --  {e.id}</NavLink>

)
      }else{
return(
""
)
      }
    })()
  }

</div> 
      )
     })}
 
  </div>
:""}
  </div>






  <NavRoute/>
</div>



<div className="footer flexcol center">

<div className="logoSite flexcol center">
       
       <img src={Logo} className='img maxmin rotate' alt="" />
     </div>
     <br />

     <br />

     <br />

  <h4 className='phone'>03-5465438</h4>
</div>


    </div>
  );
}

export default App;
