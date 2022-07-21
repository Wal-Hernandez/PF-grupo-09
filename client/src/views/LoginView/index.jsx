import React from "react";

function Login() {
  return (
    <div>
      <div>LoginView</div>
      <form>
        <div>
          <label>Name*</label>
          <div>
            <input
              type="text"
              name="name"
           /*    onChange={changeHandle} */
              maxLength="256"
            ></input>
          </div>
        </div>
        <div>
          <label>password*</label>
          <div>
            <input
              type="password"
              name="password"
          /*     onChange={changeHandle} */
              maxLength="256"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
