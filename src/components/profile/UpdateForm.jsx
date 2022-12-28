


function UpdateForm(props) {


  return (
    <div className="flexcenter w100">

<div className="flexcenter w100">
      <div className="form_div w100  ">
        <form
          action=""
          className="form flexcol "
          noValidate
          autoComplete="off"
          onSubmit={props.updateUser.handleSubmit}
        >
        <div className=" ">
        <input
            type="text"
            label="name"
            placeholder='name'
            className="inputuser"
            name="name"
            values={props.updateUser.values.name}
            onChange={props.updateUser.handleChange}
            value={props.updateUser.values.name}

          />
          <input
            type="email"
            label="email*"
            placeholder='email'
            className="inputuser"
            name="email"
            values={props.updateUser.values.email}
            onChange={props.updateUser.handleChange}
            value={props.updateUser.values.email}
          />
        </div>
        <input
            type="number"
            label="phone"
            placeholder='phone'
            className="inputuser"
            name="phone"
            value={props.updateUser.values.phone}
            values={props.updateUser.values.phone}
            onChange={props.updateUser.handleChange}
          />
        <input
            type="text"
            label="address"
            placeholder='address'
            className="inputuser"
            name="address"
            value={props.updateUser.values.address}
            values={props.updateUser.values.address}
            onChange={props.updateUser.handleChange}
          />
        
          <input
            type="password"
            label="password"
            placeholder='סיסמה ישנה'
            className="inputuser"
            name="oldpassword"
            required={true}

            values={props.updateUser.values.oldpassword}
            onChange={props.updateUser.handleChange}
          />
          <input
            type="password"
            label="password"
            placeholder='סיסמה חדשה'
            className="inputuser"
            name="newPassword"
            required={true}
            values={props.updateUser.values.newPassword}
            onChange={props.updateUser.handleChange}
          />

          <div className="flexRow">
            remember me
            <input
              type="checkbox"
              name="remember"
              values={props.updateUser.values.remember ? "true" : "false"}
              onChange={props.updateUser.handleChange}
              color="primary"
              inputprops={{ "aria-label": "secondary checkbox" }}
            />
          </div>

          <button className="btnPrimery"  type="submit">send</button>
        </form>
      </div>
    </div>
  
    </div>
  );
}

export default UpdateForm;
