import * as actionTypes from "../constants/productsConstant";

const initialState = {
  items: [],
  singleItem:{},
 

};

const products = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_PRODUCTS:
      const set = {
        ...state,
      };
      
      set.items = action.data

      return set;

      case actionTypes.SET_IN_CART_ITEMS: 
      const set_in_cart = {
        ...state,
      };
      set_in_cart.items.map((e)=>{
        if(e.id == action.data.id){
          e.isincart = true
          e.sumincart = action.data.amount
         
        }
      })

      return set_in_cart;


      case actionTypes.SINGLE_PRODUCT:
      const single = {
        ...state,
      };
      
     
      single.singleItem = action.data
      

      return single;

    



       


      
    

  
          case actionTypes.CLEAR_SINGLE_PRODUCT:
            const clearSingle = {
              ...state,
            };
            clearSingle.singleItem= {};
            
  
            return clearSingle;






    default:
      return state

  }
}

export default products