import React from "react";
import "./ConnectCode.css";
import { useNavigate } from "react-router-dom";

function ConnectCode() {
  const nav = useNavigate();
  const onConnect = () => {
    nav("/connected");
  };

  return (
    <div>
      <p className="text-3xl font-bold text-center mb-4">3Q4X42</p>
      <div className="flex gap-4">
        <input className="rounded-lg" />
        <button onClick={onConnect} className="bg-primary text-white">
          OK
        </button>
      </div>
    </div>
  );
}

export default ConnectCode;
