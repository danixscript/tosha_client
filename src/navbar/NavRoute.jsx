import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/App.css';
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import Login from "../pages/Login";
import PrivateRoute from "../router/PrivateRout";
import Profile from "../pages/Profile";
import Store from "../pages/Store";
import ProductPage from "../pages/ProductPage";
 import Cart from "../pages/Cart";
import PrivateOrederList from "../router/PrivateOrederList";
import PlaceOrder from "../pages/PlaceOrder";
import ThankPage from "../pages/ThankPage";
import Order from "../pages/Order";
import ForgotPassword from "../pages/ForgotPassword";
import PlaceOrderAterCheck from "../pages/PlaceOrderAterCheck";
import LOGO from '../image/a3.jpeg'

// commit
function NavRoute() {
  return (
    <div className="flexcol center">


<div className="navplaceFix w100">
<Navbar/>
</div>


<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>
<Route path="/forgotpass" element={<ForgotPassword/>} exact/>

<Route path="/createuser" element={<CreateUser/>} exact/>
<Route path="/login" element={<Login/>} exact/>
<Route path="/store" element={<Store/>} exact/>
{/* <Route path="/product/:id" element={<ProductPage/>} exact/> */}
<Route path="/cart" element={<Cart/>} exact/>

<Route path="/thankpage" element={<ThankPage/>} exact/>

{/* <Route path="/paypage" element={<Paypage/>} exact/> */}

<Route path="/profile" element={ <PrivateRoute />} exact> 
<Route path="/profile" element={<Profile/>} exact/>
</Route>

<Route path="/placeorderafter" element={ <PrivateRoute />} exact> 
<Route path="/placeorderafter" element={<PlaceOrderAterCheck/>} exact/>
</Route>



<Route path="/placeorder" element={ <PrivateOrederList />} exact> 
<Route path="/placeorder" element={<PlaceOrder/>} exact/>
</Route>

<Route path="/orders" element={ <PrivateOrederList />} exact> 
<Route path="/orders" element={<Order/>} exact/>
</Route>
{/* <Route path="/shipping" element={ <ShippingPrivateReducer />} exact> 
<Route path="/shipping" element={<Shipping/>} exact/>
</Route> */}












{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
    </div>
  
  );
}

export default NavRoute;
