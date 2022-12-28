// import "../css/App.css";
// import "../css/profile.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import * as actionTypes from "../store/Actions";
// import { useEffect, useState } from "react";
// import ProductPagecomp from "../components/productPage/ProductPagecomp";
// import { useFormik } from "formik";
// import axiosConfig from "../config/AxiosConfig";
// import {  singleProductPage } from "../Redux/Actions/productsAction";
// import {  messageAction } from "../Redux/Actions/errAction";
// import { addItem } from "../Redux/Actions/cartAction";

// function ProductPage(props) {
//   const [amountState, setAmount] = useState(1);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.users);
//   const product = useSelector((state) => state.products);
//   let location = useLocation();

//   function increamNum() {
//     setAmount(amountState + 1);
//     dispatch(messageAction({type:'good',msg:"plus one always fun"}))

//   }
//   function decreamNum() {
//     if (amountState > 1) {
//       setAmount(amountState - 1);
//       dispatch(messageAction({type:'good',msg:"minus one pretty sucks for a guy like you"}))
//     }
//   }

//   useEffect(() => {
//     dispatch(singleProductPage(location.state.data));
//   }, [dispatch,location.state.data]);




//   function addToCard(e) {
//     dispatch(addItem({ data: location.state.data, amount: amountState }));
//     dispatch(messageAction({type:'good',msg:"add to your cart"}))

//   }

//   return (
//     <div className="paddpage">
//       <ProductPagecomp
      
//         islog={user.isLog}
//         amountState={amountState}
//         product={product.singleItem}
//         decreamNum={decreamNum}
//         increamNum={increamNum}
//         addToCard={addToCard}
//       />
    
//     </div>
//   );
// }

// export default ProductPage;
