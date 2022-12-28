import '../../css/App.css';
import '../../css/store.css';
import {  Link } from "react-router-dom";

function Card(props) {

  return (
    <div className="card posreltivb">
         
        <div className="cardFirstChild">
          {props.e.isincart ? 
          <div className="sign_inCart" onClick={()=>{props.removeItemFromCart(props.e)}}> בעגלת הקניות</div>
        :""}
        {/* <Link  state={{data:props.e}}  to={{
                        pathname: "/product/"+props.e.id}
                      
                     
                      }  >
            </Link> */}
            <div className="image">
                <img src={props.e.productimg} alt={props.e.itemname} className="img" />

            </div>
            <div className="infobox flexcol">
                <div className="name padtext">
                    {props.e.itemname}

                </div>
                <div className="price padtext">
                  <strong>{props.e.price}$</strong>  
                    
                </div>

                
                {props.e.isincart ? 
      ""
                 : <div className="">

      
       
                 {props.e.quantity > 0?
                 <div className="flexrow bet">
                   <button className='btnincdesc' onClick={()=>{props.addToCart(props.e)}} >+</button>
                
                   <button className='btnincdesc' onClick={()=>{props.removeItemFromCart(props.e)}} >-</button>
                   </div>
                 :"המוצר אזל במלאי"}
                 </div>}
               
            </div>
        </div>




  
    </div>
  );
}

export default Card;
