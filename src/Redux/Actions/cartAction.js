import { CLEAR_CART,ADD_PAYMENT, ADD_PRODUCT,SET_TOTAL, REMOVE_PRODUCT} from '../constants/cartConstante'
import {ERROR,PRODUCT_FAIL} from '../constants/errConstant'
import {SET_IN_CART_ITEMS, SET_PRODUCTS} from '../constants/productsConstant'

import axiosConfig from "../../config/AxiosConfig";



export const addItem = (data) => async (dispatch)=>{
    try{
  

dispatch({type:ADD_PRODUCT,data:data})
dispatch({type:SET_IN_CART_ITEMS,data:data})


    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const removeItemFromCart = (data) => async (dispatch)=>{
    try{
  

dispatch({type:REMOVE_PRODUCT,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const clearCart = (data) => async (dispatch)=>{
    try{
        dispatch({type:CLEAR_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}



// export const addPaymethod = (data) => async (dispatch)=>{


//     try{

//         dispatch({type:ADD_PAYMENT,data:data});

//     }catch(e){
//         dispatch({
//             type:ERROR,
//             payload:e.response && e.response.data.message ?e.response.data.message 
//             : e.message,
//         })
//     }
// }


export const clear = (data) => async (dispatch)=>{


    try{

        dispatch({type:CLEAR_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const setTotal = (data) => async (dispatch)=>{


    try{

        dispatch({type:SET_TOTAL,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}