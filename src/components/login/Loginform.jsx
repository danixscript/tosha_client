import '../../css/App.css';
import '../../css/login.css';

import TextField from '@mui/material/TextField';


function Loginform(props) {
  return (
    <div className="Login flexcol center w100 ">

<div className=" w60 ">
<form
          action=""
          className="form flexcol w100"
          noValidate
          
          autoComplete="off"
          onSubmit={props.login.handleSubmit}
        >
          <TextField   variant="standard" 
            type="text"
            label="name"
            placeholder='name'
            name="name"
            
            values={props.login.values.name}
            onChange={props.login.handleChange}
          />
      <br />
          <TextField   variant="standard" 
            type="password"
            label="password"
            name="password"
          
            placeholder='pass'
            values={props.login.values.password}
            onChange={props.login.handleChange}
          />
      
<br />
          <div className="flexRow">
            remember me
            <input
              type="checkbox"
              name="remember"
              values={props.login.values.remember ? "true" : "false"}
              onChange={props.login.handleChange}
              color="primary"
              inputprops={{ "aria-label": "secondary checkbox" }}
            />
          </div>

          <button className="btnPrimery"  type="submit">send</button>
        </form>
    
</div>

  
    </div>
  );
}

export default Loginform;
