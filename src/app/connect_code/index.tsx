import React, { useState } from "react";
import "./ConnectCode.css";
import { useNavigate } from "react-router-dom";
import { ethers, Signer } from "ethers";
import Safe, {
  SafeAccountConfig,
  SafeFactory,
} from "@safe-global/protocol-kit";
import SafeApiKit from "@safe-global/api-kit";
import { EthersAdapter } from "@safe-global/protocol-kit";

function ConnectCode() {
  const nav = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };
  const handleSubmit = () => {
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
        <input
          type="text"
          className="input-field"
          placeholder="Enter your partner's code"
          value={walletAddress}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} className="confirm-button">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConnectCode;
