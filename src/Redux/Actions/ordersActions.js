import {SET_SINGLE_ITEM,SET_ORDER_READY, SET_NOT_ACTIVE_ORDERS, CLEAR_CART, SET_NOT_ACTIVE_ORDERS_INFO} from '../constants/cartConstante'
import {ERROR,MSG,PRODUCT_FAIL} from '../constants/errConstant'
import {SET_PRODUCTS} from '../constants/productsConstant'
import axiosConfig from "../../config/AxiosConfig";
import { clear } from './cartAction';




export const setOrderRedy = (data) => async (dispatch)=>{


  try{
dispatch({type:SET_ORDER_READY,data:data})

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}

export const getOrderById = (data) => async (dispatch)=>{


    try{

        await
        axiosConfig
        .get("/users/getorderbyid", 
       {params: {id:data}}
        )
        .then((res) => {

          if(res.data.err){
            dispatch({type:ERROR,data:"ישנה בעיה "})
      
          }else{
           if(res.data.data){
       
         

            dispatch({type:SET_NOT_ACTIVE_ORDERS,data:res.data.data})

            
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:ERROR,data:"ישנה בעיה "})
        });

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const getOrderInfoBYID = (data) => async (dispatch)=>{


  try{

      await
      axiosConfig
      .get("/users/getorderbyorderid", 
     {params: {id:data}}
      )
      .then((res) => {

        if(res.data.err){
          dispatch({type:ERROR,data:"ישנה בעיה  "})
    
        }else{
         if(res.data.data){
     
       

          dispatch({type:SET_NOT_ACTIVE_ORDERS_INFO,data:res.data.data})

          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:ERROR,data:"ישנה בעיה  "})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}



export const payNow = (data) => async (dispatch)=>{


  try{

      await
      axiosConfig
      .post("/users/userspay", 
    data
      )
      .then((res) => {

        if(res.data.err){
          dispatch({type:ERROR,data:"ישנה בעיה "})
    
        }else{
         if(res.data.data){
     
          dispatch({type:MSG,data:res.data.msg})



          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:ERROR,data:"ישנה בעיה "})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}

export const waitForRespons = (data) => async (dispatch) => {
  try {
    await
      axiosConfig
      .post("/users/neworder", 
      data
      )
      .then((res) => {
        if(res.data.err){ 
          dispatch({type:MSG,data:{msg:res.data.err.msg,type:'bad'}})
    
        }else{
         
         if(res.data){

                 dispatch({type:SET_NOT_ACTIVE_ORDERS,data:data.item.cardItems})
                 dispatch({type:CLEAR_CART})
                

          
         }

        //  dispatch({type:SET_SINGLE_ITEM,data:res.data.data})

       
          // setList(re);
        

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:{type:'bad',msg:"ישנה בעיה " + err.message}})
      });


  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}




export const getAllMyNotActiveOrders = (data) => async (dispatch) => {
  try {
    await
      axiosConfig
      .get("/users/usernotactiveorder", 
     {params:{id:data}}
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:{type:'bad',msg:"ישנה בעיה " }})
    
        }else{
         
         if(res.data){

                 dispatch({type:SET_NOT_ACTIVE_ORDERS,data:res.data.allMyNotActiveOrders})

          
         }

        //  dispatch({type:SET_SINGLE_ITEM,data:res.data.data})

       
          // setList(re);
        

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:{type:'bad',msg:"ישנה בעיה " + err.message}})
      });


  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}


export const userSeeTheOrderNow = (data) => async (dispatch)=>{


  try{

      await
      axiosConfig
      .post("/users/userseetheorder", 
   { id:data.id}
      )
      .then((res) => {

        if(res.data.err){
          dispatch({type:ERROR,data:"ישנה בעיה "})
    
        }else{
         if(res.data.data){
     
       console.log('hayayayayay')


          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:ERROR,data:"ישנה בעיה "})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}
