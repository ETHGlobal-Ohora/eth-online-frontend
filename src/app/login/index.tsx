import React from "react";
import "./Login.css";
import ConnectWeb3AuthButton from "../../components/ConnectWeb3AuthButton.tsx";
import web3auth from "../../config/web3auth.config.ts";

function Login() {

  return (
    <div className="login-container">
      <header className="login-header ml-8">
        <img
          src="/images/intersect2.svg"
          alt="Bitween Character"
          className="login-image"
        />
      </header>

      <div className="welcome-text ml-4">
        <img
          src="/images/bitween-logo.svg"
          alt="Bitween Logo"
          className="between-logo ml-4 justify-center"
        />
        <p className="gap-3 p-8">
          Welcome! Bitween is a Web3 service for couples to manage shared
          wallets, transfer funds, and communicate securely through an
          integrated chat.
        </p>
      </div>

      {/* <button onClick={onLogin} className="google-login">
        <img src="/images/google.svg" alt="Google" />
        Continue with Google
      </button> */}

      <ConnectWeb3AuthButton />

      <hr className="bg-gray-400 flex mt-2 mb-2 ml-auto mr-auto border-solid border-1"></hr>
      <div className="divider">Or continue with</div>

      <div className="social-login">
        <img
        onClick={async() => {
          await web3auth.logout()
          alert("logout")
        }}
        
        src="/images/x_icon.svg" alt="X" />
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
