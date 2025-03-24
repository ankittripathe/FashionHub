import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>SIGN UP</h1>
        <div className="login-signup-feilds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="login-signup-agree">
          <input type="checkbox" name="" id="checkbox" />
          <p>By Continuing.I agree to the terms of use & privacy policies.</p>
        </div>
        <button>Continue</button>
        <p className="login-signup-login">
          Already have an accunt? <span>Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
