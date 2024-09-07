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
import SafeApiKit from "@safe-global/api-kit";
import web3auth from "../../config/web3auth.config";
import { SafeAuthPack, SafeAuthConfig, SafeAuthInitOptions } from "@safe-global/auth-kit";
import { eth } from "web3";

function ConnectCode() {
  const nav = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  // const deploySafe = async () => {
  //   try {
  //     const safeAuthInitOptions: SafeAuthInitOptions = {
  //       // showWidgetButton: false, // Set to true to show the SafeAuth widget button
  //       chainConfig: {
  //         blockExplorerUrl: "https://explorer.testnet.rootstock.io/", // The block explorer URL
  //         chainId: "0x1f", // The chain ID
  //         displayName: "Rootstock Testnet", // The chain name
  //         rpcTarget: "https://public-node.testnet.rsk.co", // The RPC target
  //         ticker: "tRBTC", // The chain ticker
  //         tickerName: "tRBTC", // The chain ticker name
  //       },
  //     };

  //     console.log(1);
      
  //     const safeAuthPack = new SafeAuthPack();
  //     await safeAuthPack.init(safeAuthInitOptions);
  //     console.log(2);

  //     const safeAuthSignInResponse = await safeAuthPack.signIn();


  //     const provider = safeAuthPack?.getProvider() as Eip1193Provider;
  //     // const signer = await provider.getSigner();

  //     // const ethAdapter = new EthersAdapter({
  //     //   ethers,
  //     //   signerOrProvider: signer,
  //     // } as any);
      
  //     const safeFactory = await SafeFactory.init({ provider });

  //     console.log(3);
      
  //     // Safe 생성
  //     const safe = await safeFactory.deploySafe({
  //       safeAccountConfig: { threshold: 2, owners: [safeAuthSignInResponse?.eoa as string, walletAddress] },
  //     });

  //     return safe;

  //   } catch (error: any) {
  //     console.error("An error occurred during the Safe deployment:", error);
  //     setError(error.message);
  //   }
  // };

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleSubmit = async () => {
    // const contractAddress = await deploySafe();
    // console.log(contractAddress);
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
