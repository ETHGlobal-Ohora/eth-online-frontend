import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const onLogin = () => {
    nav("/profile");
  };

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

      <form className="login-form">
        <input id="email" type="email" placeholder="Email" required />
        <div className="password-container">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <img
            src="/images/eye_invisible.svg"
            alt="toggle visibility"
            className="password-icon"
          />
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <button onClick={onLogin} type="submit" className="login-button">
          Login
        </button>
      </form>

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
