import React from "react";
import "./Login.css";
import ConnectWeb3AuthButton from "../../components/ConnectWeb3AuthButton.tsx";

function Login() {

  return (
    <div className="container">
      <header className="header">
        <img
          src="/images/main_logo.png"
          alt="Finance Us Illustration"
          className="illustration"
        />
      </header>

      <div className="welcome-text">
        <h2>Welcome!</h2>
      </div>       
        <ConnectWeb3AuthButton />

      <div className="register">
        <p>
          Not a member? <a href="#">Register now</a>
        </p>
      </div>

      <hr className="divider" />

      <div>
        <p className="continue-with">Or continue with</p>
        <div className="social-icons">
          <img src="/images/x_icon.svg" alt="X icon" />
          <img src="/images/discord_icon.svg" alt="Discord icon" />
          <img src="/images/tel_icon.svg" alt="Telegram icon" />
        </div>
      </div>
    </div>
  );
}

export default Login;
