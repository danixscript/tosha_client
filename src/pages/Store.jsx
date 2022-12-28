import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import Storecomp from "../components/store/Storecomp";
import { useEffect, useState } from "react";
import { clearState, getBakeryProducts } from "../Redux/Actions/productsAction";
import Pagination from "../components/pagenation/Pagination";
import { addItem, removeItemFromCart } from "../Redux/Actions/cartAction";


function Store() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state ) => state.products);
  const cartItems = useSelector((state ) => state.cart);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayPerPage, setArrayPerPage] = useState(5);

  useEffect(() => {
    signProduct()
 
  }, [cartItems.cardItems]);



  function signProduct(){
    dispatch(getBakeryProducts(cartItems.cardItems));

    dispatch(clearState()) 


  }

  const indexOfLastProduct = currentPage * arrayPerPage;
  const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
  const currentArray = products.items.slice(indexOfFirstProduct,indexOfLastProduct)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

function addToCart(e) {
  dispatch(addItem(e));

}
function removeItemFromCartX(e) {

  dispatch(removeItemFromCart(e));

} 
  return (
   
       <div className="flexcol center">
           <Storecomp removeItemFromCart={removeItemFromCartX} addToCart={addToCart}  array={currentArray} />
           <Pagination paginate={paginate} arrayPerPage={arrayPerPage} totalProducts={products.items.length}/>
      
   
       </div>
  );
} 

export default Store;
