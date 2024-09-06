import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const onLogin = () => {
    nav("/profile");
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img
          src="/images/intersect2.svg"
          alt="Bitween Character"
          className="login-image"
        />
      </header>

      <div className="welcome-text">
        <img
          src="/images/bitween-logo.svg"
          alt="Bitween Logo"
          className="between-logo"
        />
        <p>
          Welcome! Bitween is a Web3 service for couples to manage shared
          wallets, transfer funds, and communicate securely through an
          integrated chat.
        </p>
      </div>

      <button onClick={onLogin} className="google-login">
        <img src="/images/google.svg" alt="Google" />
        Continue with Google
      </button>

      <hr></hr>
      <div className="divider">Or continue with</div>

      <div className="social-login">
        <img src="/images/x_icon.svg" alt="X" />
        <img src="/images/discord_icon.svg" alt="Discord" />
        <img src="/images/tel_icon.svg" alt="Telegram" />
      </div>

      <div className="sign-up-options">
        Sign up via<a href="#">email</a>or<a href="#">phone</a>
      </div>
    </div>
  );
}

export default Login;
