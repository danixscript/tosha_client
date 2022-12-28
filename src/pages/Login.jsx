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
import { MSG } from "../Redux/constants/errConstant";

function Login() {
  
  const dispatch = useDispatch();
  const [isLog, setIsLog] = useState(false);
  const [errState, setErrState] = useState("");
  let location = useLocation();

  const login = useFormik({
    initialValues:{
      name: "", 
      password: "",
      remember: false,
  },onSubmit:async values  => {
    try{
      setErrState("");
       await 
      axiosConfig
      .post("/usersregister/login", 
      values
      )
      .then((res) => {
        if(res.data.err){

          dispatch({type:MSG,data:res.data.err})
        return setErrState(res.data.err.msg);

        }else{
          localStorage.setItem('rem',res.data.remember)
          res.data.password = "123"
          if(res.data.remember){
            localStorage.setItem('user',JSON.stringify(res.data.userInfo))      
          }
            
            setIsLog(true);
            dispatch(userLogin(res.data))
           

        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending request"+e);
    }
  }});


  
  if(isLog){
    if(location.state == 'way to buy'){
      return <Navigate to={{pathname:"/shipping"}}/>

    }else{
      return <Navigate to={{pathname:"/home"}}/>

    }
  }




//   async function responsGoogle(response){
//     try{
//       setErrState("")
//       axiosConfig.post("/google/login",response.profileObj)
//       .then((res) => {

//         if(res.data.err){
//           localStorage.setItem('usernumber',null)
//           return setErrState(res.data.err);
//         } 

//         localStorage.setItem('rem',res.data.remember)
//         if(res.data.remember){
//             localStorage.setItem("token",res.data.token)
//             localStorage.setItem("user",JSON.stringify(res.data.userInfo))
//         }
//        localStorage.setItem('usernumber',res.data.userInfo.number)

        
//         dispatch({type:actionTypes.LOGIN,data:res.data})
//         setIsLog(true);
//         setErrState("")
//         console.log("done !")
//       })
//       .catch((err) => {
//         setErrState(err);
//         console.log("error3")
//       });
//     }catch(e){
//       console.log(e)
//       setErrState("error while sending requast"+e);
//     }
    
// }






  return (
    <div className=" loginscreen flexcol  ">
<div className="flexcol  w100 h100">
<div className="controlWidthHeight flexrow">
<div className="loginleftside">

</div>
<div className="rightside flexcol center " >
<h1>היכנס למערכת</h1>
<br />
<Loginform login={login}/>
<NavLink to='/createuser'>צור משתמש </NavLink>
<NavLink to='/forgotpass'> שכחתי ססמה </NavLink>
{errState}
</div>
</div>




</div>
  
    </div>
  );
}

export default Login;
