
import { NavLink, } from "react-router-dom";


function NavProfileBtn(props) {
  return (
   <div className="alighn posre ">
     <div onClick={props.activePopUpNav} className="padlinkf">
              <div
                  
                  className="Link"
                 
                >
            {props.user.user.name}   ,שלום לך    ^
                 
                </div>

              </div>
              
              <div className={props.popUpNav?"linksActive flexcol " :"linksDisable"}>
                <NavLink activeclassname="active_Link" className=" cardlinkr  brbottom" to="/profile">
              פרופיל
            </NavLink>

            <div className="cardlinkr logout" onClick={props.logout}>
              התנתק
            </div>
                </div>
   </div>
  );
}

export default NavProfileBtn;
