


function USerInfo(props) {


    return (
      <div className="boxsideao  ">

   <div className="box_prof">
   <div className="imagesProf">
         
          <div className="profileimage">

          </div>
        </div>
  
  
    <div className="userInforProf   ">
      
     <h3>שלום {props.user.name}</h3>
     <p>{props.user.name} </p>
     <p>{props.user.email} </p>
   
    </div>
   </div>
   <div className={props.activete == 'profile' ? "profilefagelonk absulotcolorprof bacclicked" : " profilefagelonk absulotcolorprof"} >
<p className= " padbutun" id='profile' onClick={props.changePage} >צפייה בפרטים שלי  </p>
   </div>
   <div  className={props.activete == 'order' ? "profilefagelonk absulotcolorprof bacclicked" : " profilefagelonk absulotcolorprof"}>
  <p className=" padbutun " id='order' onClick={props.changePage}> צפיה בהזמנות שלי  </p>
   </div>

      </div>
    );
  }
  
  export default USerInfo;
  