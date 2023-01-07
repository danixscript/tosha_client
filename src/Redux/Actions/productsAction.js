import {
  ERROR,
  PRODUCT_FAIL,
  GOOD_MESSAGE,
  MSG
} from '../constants/errConstant'
import {
 
  SINGLE_PRODUCT,
  SET_PRODUCTS,

  CLEAR_SINGLE_PRODUCT
} from '../constants/productsConstant'

import axiosConfig from "../../config/AxiosConfig";


export const getBakeryProducts = (data) => async (dispatch) => {
  try {
 
    await axiosConfig
      .get("/store/products")
      .then((res) => { 
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: {type:'bad',msg:"ישנה בעיה  : " + res.data.err.msg }
          });

        } else {
          for(let i = 0; i < res.data.allProducts.length; i++){
            for(let k = 0; k < data.length; k++){
              if(res.data.allProducts[i].id == data[k].id){
                res.data.allProducts[i].isincart = true
                res.data.allProducts[i].sumincart = data[k].amount
              }
            }
           }
          dispatch({
            type: SET_PRODUCTS,
            data: res.data.allProducts
          });


        }
      })
      .catch((err) => {

        dispatch({
          type: MSG,
          data: {type:'bad',msg:"ישנה בעיה " + err.message}
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}






export const clearState = (data) => async (dispatch) => {
  try {

    dispatch({
      type: CLEAR_SINGLE_PRODUCT
    })

  } catch (e) {
    dispatch({
      type: MSG,
      data:{type:'bad',msg:"ישנה בעיה " + e.message}
    })
  }
}



export const singleProductPage = (data) => async (dispatch) => {
  try {
    await

    axiosConfig
      .post("/product/getproductbyid",
        data
      )
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: {type:'bad',msg:"ישנה בעיה " + res.data.err.msg}
          })

        } else {


          dispatch({
            type: SINGLE_PRODUCT,
            data: res.data.data.products,
            comments: res.data.data.comments
          })


        }
      })
      .catch((err) => {
        console.log('err')
        dispatch({
          type: MSG,
          data: {type:'bad',msg:"ישנה בעיה " + err.message}
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}