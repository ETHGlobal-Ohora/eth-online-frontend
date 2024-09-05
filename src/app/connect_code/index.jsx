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
        <p>
          Your Number : <b>3Q4X4</b>
        </p>
        <h2 className="user-number"></h2>
      </div>
      <div className="input-section">
        <label className="input-label">Connect</label>
        <input
          type="text"
          className="input-box"
          placeholder="Partner’s Certification number"
        />
        <button className="skip-button">Skip now</button>
        <button onClick={onConnect} className="confirm-button">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConnectCode;
