import * as actionTypes from "../constants/cartConstante";


const initialState = {

  orderItems: [],
  orderTotalPrice:0,
notActiveOrders:[],
is_notActiveOrders:false,
notActiveOrderInfo:[]
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CLEAR_CART:
      const clearcart = {
        ...state ,
      }
      clearcart.orderItems = []
      clearcart.notActiveOrders = []
      clearcart.is_notActiveOrders = false

      return clearcart


      // case actionTypes.SET:
      //   const setInfo = {
      //     ...state ,
      //   }
      //   let data = localStorage.getItem('address');
      //   if (data == undefined || data == "undefined") {
      //     return setInfo
      //   } else {
  
      //     let jsondata = JSON.parse(data);
      //     setInfo.shipping = jsondata;
      //   }
  
      //   return setInfo




 case actionTypes.SET_NOT_ACTIVE_ORDERS:
      const notActiveOrders = {
        ...state,
      };
     if(action.data.length > 0){
      notActiveOrders.notActiveOrders = action.data
      notActiveOrders.is_notActiveOrders =true
     }else{
      notActiveOrders.is_notActiveOrders =false

     }

      return notActiveOrders;


      case actionTypes.SET_NOT_ACTIVE_ORDERS_INFO:
        const notActiveOrderInfo = {
          ...state,
        };

       
       
        notActiveOrderInfo.notActiveOrderInfo = action.data
       
       
  
        return notActiveOrderInfo;

    case actionTypes.SET_ORDER_READY:
      const orderready = {
        ...state,
      };
      orderready.orderItems = action.data.cardItems;
      orderready.orderTotalPrice = 0;


      if(action.data.cardItems.length >0){
        action.data.cardItems.map((e)=>{
          return orderready.orderTotalPrice += (e.price * e.amount)

        })
      }

      return orderready;


      

 


    default:
      break;
  }
  return state;


};

export default reducer;