import "../../../css/App.css";
import "../../../css/home.css";
import GoShop from "../../home/GoShop";
import { NavLink } from "react-router-dom";
import CartTAselection from "./CartTAselection";

function CartNavSide(props) {
  let total = 0;

  return (
    <div className="flexcol w100 center ">
      <button className="butonclose" onClick={props.closenavbar}>
       סגור עגלה
      </button>
      <div className=" ">
        {props.cart && props.cart.length > 0 ? (
          <div className="">
            <div className=" cartnavlist">
              {props.cart.map((e, i) => {
                total = total + e.price * e.amount;

                return (
                  <div key={e.id} className=" boxshadow">
                    <div className="cartcard ">
                      <div className="flexrow   between  elecart">
                        <div className="imagecard">
                          <img src={e.productimg} alt="" className="img" />
                        </div>

                        <div className="info flexrow between">
                          <p> כמות {e.amount}</p>
                        </div>
                        <div className="info flexrow between">
                          <p> ש"ח{e.price} </p>
                        </div>

                        <div className="amountcard divbtninc flexcol center">
                          <button
                            className="incbtn"
                            onClick={() => {
                              props.increamNum(e);
                            }}
                          >
                            +
                          </button>
                          <p className="amountnum flexrowcenter">{e.amount}</p>
                          <button
                            className="incbtn"
                            onClick={() => {
                              props.decreamNum(e);
                            }}
                          >
                            -
                          </button>
                        </div>

                        <div className="deletall">
                          <button
                            className="logout"
                            id={e.id}
                            onClick={() => {
                              props.deleteall(e);
                            }}
                          >
                            הורד מהסל
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="w100 flexrowend">
                <p className="textcolor text28">
                  מחיר כולל : <strong>{total}ש"ח</strong>
                </p>
              </div>

              <div className={"w100 flexrow between bordertop "}>

             
               


                <div className={"divhovershow  flexcol center w100"}> 
            
                <div className="bybututun">הזמן עכשיו</div>
                <div className=" linkstopay flexrow center" onClick={props.closenavbar}>
                <NavLink to={"/placeorder"} className='linktopay' state={{ type: "TA" }}>
                  {" "}
                TA
                </NavLink>
                <NavLink to={"/placeorder"} className='linktopay' state={{ type: "SIT" }}>
                  {" "}
                ישיבה
                </NavLink>
                </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="element flexcenter">
            <GoShop
              disabledPopUp={props.disabledPopUp}
              titleText={"אין לך מוצרים בעגלה"}
              btn={"לך לקנות עכשיו!"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CartNavSide;
