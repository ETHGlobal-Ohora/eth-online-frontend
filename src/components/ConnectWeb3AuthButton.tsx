import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import web3auth from "../config/web3auth.config";

const ConnectWeb3AuthButton = () => {
  const nav = useNavigate();
  const handleConnect = async() => {
    await web3auth.connect()
    nav("/connect-code")
  }

  return (
    <div
      className="bg-primary flex rounded-full px-6 py-3 text-white justify-center align-center cursor-pointer"
      onClick={handleConnect}
    >
      Connect to Web3Auth
    </div>
  );
};
export default ConnectWeb3AuthButton;
