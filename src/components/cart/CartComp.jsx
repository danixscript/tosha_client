import '../../css/App.css';
import '../../css/home.css';
import GoShop from '../home/GoShop';
import { NavLink } from "react-router-dom";

function CartComp(props) {
  
   let total =0


  return (
    <div className="flexcol w100   center ">

        
    <div className="firstPopChild ">
        {props.cart&&props.cart.length > 0 ?

    <div className='posrelcart'>     

    <div className="cardLoop">

        {props.cart.map((e,i)=>{
           
           total = total + (e.price *e.amount)

          
            return(
                
                <div key={e.id+e.name } className="element mardgd  boxshadow">
                    <div className="cartcard ">
                        <div className="gridcol-5   between  elecart">
                            <div className="imagecard">
                            <img src={e.productimg} alt="" className="img" />
                            </div>
                          
                            <div className="namediv">
                            <strong>{e.itemname}</strong>
                            </div>
                         
                            <div className="info flexrow between">
                                
                                <p>מחיר לאחד -{e.price}</p>

                            </div> 
                            <div className="info flexrow between">
                            <p>  כמות { e.amount}</p>

                            </div>
                            <div className="info flexrow between">
                            <p>  {e.price} * {e.amount} = {e.price * e.amount}</p>

                            </div>

                            <div className="amountcard divbtninc flexrow">
                                <button className="incbtn"  onClick={()=>{props.increamNum(e)}}>+</button>
                               <p className="amountnum flexrowcenter">{ e.amount}</p>
                                <button className="incbtn"   onClick={()=>{props.decreamNum(e)}}>-</button>

                                

                            </div>
                           
                            <div className="deletall">
                                <button className="logout" id={e.id} onClick={()=>{props.deleteall(e)}}>delete</button>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            )
        })}
   

    </div>
  <div className="posfix">
  <div className="w100 flexrowend">
        <p className='textcolor text28'>total : <strong>{total}$</strong></p>
    </div>
    
    <div className={"w100 flexrow between bordertop"}>
        
  <NavLink to="/store"  className={ "sopping"}>continue to shopping </NavLink>

    {/* <button onClick={props.buyproduct}  className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy {total}$ </button> */}
 <div id={total} onClick={props.buyproduct}  className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy {total}$</div>
  
  </div>
  </div>
    </div>   
    :
<div className="element flexcenter">   
 <GoShop disabledPopUp={props.disabledPopUp} titleText={'you have no items in cart'} btn={'go shop !'} />
</div>
}
        

    </div>


          
           
  
    
     
    </div>
  );
}

export default CartComp;
