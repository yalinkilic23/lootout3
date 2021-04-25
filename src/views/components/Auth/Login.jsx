import React from "react";
import logo from '../../../assets/img/sign-in-logo.png'
function Login() {
  return (
    <div className="Login">
      <svg
      className="login-back-btn"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.36601 8.98537L8.54188 15.858L7.79808 16.5264L0.872582 8.81957L0.572266 8.48537L0.872582 8.15117L7.79808 0.444336L8.54188 1.11273L2.36601 7.98537L11.138 7.98537C17.9929 7.98537 23.5103 14.2061 23.5103 21.6971L23.5103 25H22.5103L22.5103 21.6971C22.5103 14.6552 17.3427 8.98537 11.138 8.98537H2.36601Z"
          fill="#75CCB5"
          fill-opacity="0.8"
        />
      </svg>
      <form>
        <h3>SIGN IN</h3>
        <div className="input-wrapper">
          <label htmlFor="Email">Email</label>
          <input type="email" value="Email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" value="........." />
        </div>

        <input type="submit" value="Sign Up" className="popup-sign-in-button"/>

        <img src={logo} alt="" className="sign-in-logo"/>
        
      </form>
    </div>
  );
}

export default Login;
