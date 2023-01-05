import React, { useState } from "react";
import '../css/App.css';
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import { Navigate,NavLink } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";

import CreateUserform from "../components/register/CreateUserform";
import { userLogin } from "../Redux/Actions/userAction";

function CreateUser() {
  const dispatch = useDispatch();
  const [isLoggd, setisLoggd] = useState(false);
  const [errState, setErrState] = useState("");

  const createUser = useFormik({
    initialValues:{
      password: "",
      name: "",
      email: "",
      phone:"",
      address:"",
      remember: false,
  },onSubmit:async values  => {
    try{
       await
      axiosConfig
      .post("/usersregister/createuser", 
      values
      )
      .then((res) => {
        if(res.data.err){
        return setErrState(res.data.err);

        }else{
          localStorage.setItem('rem',res.data.remember)
          if(res.data.remember){
            localStorage.setItem('user',JSON.stringify(res.data.userInfo))      
          }
          localStorage.setItem('usernumber',res.data.number)
            res.data.password = "123"
            setisLoggd(true);
            dispatch(userLogin(res.data))
            setErrState("");

        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});


  
  if(isLoggd){
    return <Navigate to={{pathname:"/home"}}/>
  }



  return (
    <div className="flexcol center ">

 <div className="">
 <h1>צור משתמש </h1>
  <CreateUserform createUser={createUser} />

  <NavLink to={'/login'}>login</NavLink>

  {errState}
 </div>


  
      
        </div>
  );
}

export default CreateUser;
