import * as actionTypes from "../constants/errConstant";

const initialState = {
  msg: "",
  active_message: false,
  type:'',

};

const products = (state = initialState, action) => {
  switch (action.type) {



    

    case actionTypes.MSG:
      const msg = {
        ...state,
      };
      console.log(action.data)

   if(action.data){
    msg.msg = action.data.msg
    msg.active_message = true
    msg.type = action.data.type
   }else{
    msg.msg =''
    msg.active_message = false
    msg.type = ''
   }

      return msg;

    case actionTypes.ERROR:
      const err = {
        ...state,
      };
      console.log(action.data)

      err.msg = action.data
      err.active_message = true
      good.type = 'bad'
 
      return err;

   
      case actionTypes.GOOD_MESSAGE:
        const good = {
          ...state,
        };
        console.log(action.data)
        good.err = action.data
        good.active_message = true;
        good.type = 'good'
  
        return good;

        case actionTypes.BAD_MESSAGE:
          const bad = {
            ...state,
          };
          console.log(action.data)
          bad.msg = action.data
          bad.active_message = true;
          bad.type = 'bad'
    
          return bad;
        case actionTypes.CLEAR:
          const clear = {
            ...state,
          };
          clear.msg = ""
          clear.active_message = false;
          clear.type = ''
    
          return clear;
  







    default:
      return state

  }
}

export default products