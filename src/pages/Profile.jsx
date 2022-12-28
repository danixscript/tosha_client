import '../css/App.css';
import '../css/home.css';
import Profilecomp from '../components/profile/Profilecomp';
import USerInfo from '../components/profile/USerInfo';
import {useEffect, useState} from 'react'
import AddNewItem from '../components/profile/AddNewItem';
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../store/Actions";
import axiosConfig from "../config/AxiosConfig"
import MyOrders from '../components/profile/MyOrders';

import Pagination from '../components/pagenation/Pagination';
import { userLogin } from '../Redux/Actions/userAction';
import { MSG } from '../Redux/constants/errConstant';
function Profile() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.users);
    const [activete, setAcctivate] = useState("profile");
    const [list, setlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [arrayPerPage, setArrayPerPage] = useState(5);

 

  
    function changePage(e){
      setAcctivate(e.target.id)

    }


    const updateUser = useFormik({
      initialValues:{
        oldpassword: "",
        newPassword:'',
        name: user.user.name,
        phone:user.user.phone,
        email: user.user.email,
        address:user.user.address,
        remember: false,
        id:user.user.id
    },onSubmit:async values  => {
      try{
         await
        axiosConfig
        .post("/users/updateuserinfo", 
        values
        )
        .then((res) => {
          if(res.data.err){
         dispatch({type:MSG, data:res.data.err})

  
          }else{
          
              dispatch(userLogin(res.data))
              dispatch({type:MSG, data:{type:'good',msg:'עכשיו שיניתה את פרטיך האישיים'}})
              
          }
        })
        .catch((err) => {
          dispatch({type:MSG, data:{type:'bad',msg:'    יש שגיאה' + err.message}})
        });
      }catch(e){
        console.log(e)
        dispatch({type:MSG, data:{type:'bad',msg:'    יש שגיאה' + e.message}})
      }
    }});
  


useEffect(()=>{
getAllMyProducts()
},[])



   async function getAllMyProducts(){

    try{ 
        await
       axiosConfig
       .get("/users/getorderbyid",{params:{id:user.user.id}}
       )
       .then((res) => {
         if(res.data.err){
         return setErrState(res.data.err);
 
         }else{
        
          setlist(res.data.data)
             
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

    }


    const indexOfLastProduct = currentPage * arrayPerPage;
    const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
    const currentArray = list.slice(indexOfFirstProduct,indexOfLastProduct)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    


  return (
    <div className="flexrow w100   profile profileregular paddpage">
       <USerInfo activete={activete} changePage={changePage} user={user.user} />

 <div className='profileSidePage'>

  {activete == 'profile'?
     <Profilecomp updateUser={updateUser}  />
     :
    <div className="">
       <MyOrders list={currentArray} updateUser={updateUser}  />
       <Pagination paginate={paginate} arrayPerPage={arrayPerPage} totalProducts={list.length} />
    </div>


}
   

   
 </div>
    </div>
  );
}

export default Profile;
