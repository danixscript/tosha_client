import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.css";
import "../css/media.css";
import "./navcart.css";
import LOGO from '../image/a2.jpeg'
import NavProfileBtn from "../components/nav/NavProfileBtn";
import { userloguot } from "../Redux/Actions/userAction";
import { clearCart } from "../Redux/Actions/cartAction";
import CartActions from "../components/cart/Cartnav/CartActions";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// commit
function Navbar(props) {
  const users = useSelector((state) => state.users);
  const cart = useSelector((state) => state.cart);
  const [popUpNav, setPopUpNav] = useState(false);
  const [SideNavCart, setSideNavCart] = useState(false);

  const dispatch = useDispatch();

  function logout() {
    dispatch(userloguot());
    dispatch(clearCart());
  }

  function navPopUp() {
    setPopUpNav(!popUpNav);
  }

  function changeNavState() {
    setSideNavCart(!SideNavCart);
  }
  function closenavbar() {
    setSideNavCart(false);
  }

  return (
    <div className="navAllBar">
      <div className="allnav navbarFirstChild">
        <div className="flexrow allnavchild   ">
          {/* <InputSearch /> */}

          <div className="flexrow bet w100">
            <div className="logo">
              <img src={LOGO} className='imglogo' alt="" />


            
            </div>
            <div className="flexrow ">
            <div className="flexcol centerright">
            <p> טלפון: 05-58174355</p>
               <p>א - ה משעה 7:00</p>
            
            </div>
            <div className="ksv"></div>
              </div>

            <div className="flexrow posrelative Link">
              {users.isLog ? (
                <div className="flexrow center">
                  <NavProfileBtn
                    user={users}
                    popUpNav={popUpNav}
                    activePopUpNav={navPopUp}
                    logout={logout}
                  />
                </div>
              ) : (
                <div className="flexrow center ">
                  <NavLink
                    activeclassname="active_Link"
                    className=""
                    to="/login"
                  >
                    הכנס
                  </NavLink>/
                  <NavLink
                    activeclassname="active_Link"
                    className=""
                    to="/createuser"
                  >
                    הירשם
                  </NavLink>
                </div>
              )}
              {/* <NavCart disabledPopUp={disabledPopUp} deleteall={deleteall} setAmount={setAmount} decreamNum={decreamNum} increamNum={increamNum} isActive={navPopUp}  cart={card.cardItems} /> */}

              <NavLink activeclassname="active_Link" className="Link" to="/about">
               ביקורות
              </NavLink>
              <NavLink
                activeclassname="active_Link"
                className="Link"
                to="/store"
              >
                החנות שלנו
              </NavLink>
              <NavLink
                activeclassname="active_Link"
                className="Link"
                to="/"
              >
                דף הבית
              </NavLink>
            </div>
          </div>
        </div>
        <div className="cartNav">
          <div onClick={changeNavState} className="butoncart">
            <div className="flexrow colorred">
             
              {cart.cardItems && cart.cardItems.length > 0 ? (
                <div className="cartNumber flexcenter">
                  <p className="cartNumberin">{cart.cardItems.length}</p>
                </div>
              ) : (
                0
              )}<AddShoppingCartIcon/>
            </div>

          </div>

          <div className={SideNavCart ? "cartnavpos " : "closeNavCart"}>
            <CartActions closenavbar={closenavbar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
