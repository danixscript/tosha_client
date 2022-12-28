import React, { useState } from "react";
import '../css/App.css';
import Loginform from '../components/login/Loginform';
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import { Navigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userLogin } from "../Redux/Actions/userAction";
import { messageAction } from "../Redux/Actions/errAction";

function ForgotPassword() {
  
  const dispatch = useDispatch();
  const [isLog, setIsLog] = useState(false);
  const [errState, setErrState] = useState("");
  const [EmaisState, setEmaisState] = useState("");

  let location = useLocation();

function getEmail(e){
    setEmaisState(e.target.value)
}

async function forgotpass(){
    try{
        setErrState("");
         await 
        axiosConfig
        .post("/usersregister/forgotpass", 
        {useremail:EmaisState}
        )
        .then((res) => {
          if(res.data.err){
          return setErrState(res.data.err);
  
          }else{
          
              
              setIsLog(true);
              dispatch(messageAction(res.data.msg))

             
  
          }
        })
        .catch((err) => {
          setErrState(err.err);
        });
}catch(e){
console.log(e)
}
}

  
  if(isLog){
    if(location.state == 'way to buy'){
      return <Navigate to={{pathname:"/shipping"}}/>

    }else{
      return <Navigate to={{pathname:"/home"}}/>

    }
  }









  return (
    <div className="  ">
<div className="flexcol center ">
<h1>הזן אימייל כדי לאפס סיסמה</h1>
<input type="email" onChange={getEmail}  /> <button onClick={forgotpass} >שלח</button>



</div>
  
    </div>
  );
}

export default ForgotPassword;
