import { NavLink } from "react-router-dom";
import "../css/App.css";
import "../css/cart.css";


function ThankPage(props) {
 
  return (
    <div className="minh90  flexcol center ">
        <h1>תודה לכם על הקנייה   </h1>
        <NavLink to="/">חזרה לדף הבית</NavLink>
     
    </div>
  );
}

export default ThankPage;
