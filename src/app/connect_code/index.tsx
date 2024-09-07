import React, { useState } from "react";
import "./ConnectCode.css";
import { useNavigate } from "react-router-dom";
import { BrowserProvider } from "ethers";
import { ethers, Signer, Eip1193Provider } from "ethers";
import Safe, {
  PasskeySigner,
  SafeAccountConfig,
  SafeFactory,
} from "@safe-global/protocol-kit";
import { EthersAdapter } from "@safe-global/protocol-kit";
import SafeApiKit from "@safe-global/api-kit";
import web3auth from "../../config/web3auth.config";
import { SafeAuthPack, SafeAuthConfig, SafeAuthInitOptions } from "@safe-global/auth-kit";

function ConnectCode() {
  const nav = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  const deploySafe = async () => {
    try {
      const safeAuthInitOptions: SafeAuthInitOptions = {
        // showWidgetButton: false, // Set to true to show the SafeAuth widget button
        chainConfig: {
          blockExplorerUrl: "https://sepolia.etherscan.io", // The block explorer URL
          chainId: "0xaa36a7", // The chain ID
          displayName: "Ethereum Sepolia", // The chain name
          rpcTarget: "https://rpc.ankr.com/eth_sepolia", // The RPC target
          ticker: "ETH", // The chain ticker
          tickerName: "Ethereum", // The chain ticker name
        },
      };
      
      const safeAuthPack = new SafeAuthPack();
      await safeAuthPack.init(safeAuthInitOptions);

      const safeAuthSignInResponse = await safeAuthPack.signIn();

      const provider = new BrowserProvider(safeAuthPack?.getProvider() as Eip1193Provider);
      const signer = await provider.getSigner();

      const ethAdapter = new EthersAdapter({
        ethers,
        signerOrProvider: signer,
      } as any);
      
      const safeFactory = await SafeFactory.init({ provider, signer });
      
      // Safe 생성
      const safe = await safeFactory.deploySafe({
        safeAccountConfig: { threshold: 2, owners: [safeAuthSignInResponse?.eoa as string, walletAddress] },
      });

    } catch (error: any) {
      console.error("An error occurred during the Safe deployment:", error);
      setError(error.message);
    }
  };

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleSubmit = async () => {
    // await deploySafe();
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
          placeholder="Enter your partner's wallet address"
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
