import { NavLink } from "react-router-dom";
import "../css/App.css";
import "../css/cart.css";


function ThankPage(props) {
 
  return (
    <div className="  flexcol center ">
        <h1>Thank you for buying</h1>
        <NavLink to="/">חזרה לדף הבית</NavLink>
     
    </div>
  );
}

export default ThankPage;
