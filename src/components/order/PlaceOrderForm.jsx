import TextField from '@mui/material/TextField';
import '../../css/App.css'
import Button from '@mui/material/Button';

function PlaceOrderForm(props) {


    return (
    
  
<div className="    ">
    <form action="" onSubmit={props.buyItem} className="payform">
    <div className="flexrow">
    <TextField id="standard-basic" required label="card name" variant="standard" />
    <TextField id="standard-basic" required label="card number" variant="standard" />
    </div>
    <br />
    <div className="">
    <TextField id="standard-basic" required label="email" variant="standard" />
    </div>
    <br />
    <div className="flexrow">
    <TextField id="standard-basic" required label="date" variant="standard" />
    <TextField id="standard-basic" required label="CVV" variant="standard" />
    <TextField id="standard-basic" required label="ZIpcode" variant="standard" />
    </div>
    <br />
    <Button type='submit' variant="outlined">קנה עכשיו</Button>
    </form>
   
   
  
</div>
  
    
    );
  }
  
  export default PlaceOrderForm;
  