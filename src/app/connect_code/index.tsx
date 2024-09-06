import React from "react";
import "./ConnectCode.css";
import { useNavigate } from "react-router-dom";

function ConnectCode() {
  const nav = useNavigate();
  const onConnect = () => {
    nav("/connected");
  };

  return (
    <div className="connect-container">
      <div className="step-indicator">
        <span className="step-number">2</span> /
        <span className="step-number-total">2</span>
      </div>
      <h1 className="title">Connect Your Partner</h1>

      <div className="number-section">
        <p className="connect-wallet">
          <b>Connect Wallet Link</b>
        </p>
        <img
          src="/images/shiny-happy-socializing.png"
          alt="image"
          className="girl-image"
        />
      </div>

      <div className="input-section">
        <button className="skip-button">Skip now</button>
        <button onClick={onConnect} className="confirm-button">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConnectCode;
