import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
function PopUpTA(props) {

 

  return (
    <div className={props.activePopUp ?"positioncenter  flexcol center":'disable'}>
  
  <div className="popupcart flexcol center">

 
  <button className="btnclose" onClick={props.closenow}>close</button>

<h1>הזמנה חדשה</h1>
    <div className="chooseOrderType flexrow w100 around">
        <div className="ta w50px">
            <NavLink to={'/placeorder'} state={{type:'TA'}} className="butndig flexcol center"  >TA</NavLink>
        </div>
        <div className="sit w50px">
            <NavLink to={'/placeorder'} state={{type:'SIT'}} className="butndig flexcol center" id="SIT">ישיבה במקום</NavLink>
        </div>
    </div> 
    </div>

    </div>
  );
}

export default PopUpTA;
