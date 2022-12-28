import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyOrders(props) {
  const [preview, setpreview] = useState(null);

  return (
    <div className="">
      <div className="">
        <table className="table  ">
          <tr> 
            <th>id</th>
        
            <th>מחיר</th>
                <th>האם שולם 1\0 </th>
            <th>date </th>
          </tr>
          {props.list.length > 0
            ? props.list.map((e) => {
                return (
                  <tbody className={(()=>{
                    if(e.active == 1 ){
                      return(
                        'paid'
                      )
                    }
                    else if ( e.uptofiftin == 1){
                      return('orderwait')
                    }else if (e.active == 0 && e.uptofiftin == null ){
                      return 'bcred'
                    }
                  })()}>
                    <tr className="brbottom">
                      <td>
                        {" "}
                        <Link
                          state={{orderid:e.id}}
                          to={'/orders'}
                        >
                          <p> {e.id}</p>
                        </Link>  
                      </td>

                      <td> {e.orderprice}</td>
                      <td> {e.active}</td>
                      <td>{e.date.split('T')}</td>
                    </tr>
                  </tbody>
                );
              })
            : "no items found"}
        </table>
      </div>
    </div>
  );
}

export default MyOrders;
