import React from "react";
import "./Connected.css";
import { Navigate, useNavigate } from "react-router-dom";
import { MASTER_ADDRESS, PARTNER_ADDRESS } from "../../config";
import { useGetSigner } from "../chat_screen/useGetSigner";
import { Client, useCanMessage } from "@xmtp/react-sdk";

function Connected() {
  const nav = useNavigate();
  const { canMessage } = useCanMessage();
  const getSigner = useGetSigner();

  async function createClient() {
    const signer = await getSigner();
    const me = await signer.getAddress();
    const to = me === MASTER_ADDRESS ? PARTNER_ADDRESS : MASTER_ADDRESS;
    const client = await Client.create(signer, {
      persistConversations: true,
    });

    return client.canMessage(to);
  }
  const onConneceted = async () => {
    // const canConnect = await createClient();
    // if (canConnect) 
      nav("/chat-screen");
  };

  return (
    <div className="connect-container">
      <h1 className="connect-title">Connected!</h1>
      <div className="images-container">
        <div className="image-group">
          <img
            src="/images/ellipse-5.svg"
            alt="Left Ellipse"
            className="ellipse"
          />
          <img
            src="/images/intersect.svg"
            alt="Left Character"
            className="character"
          />
        </div>
        <img src="/images/connectline.svg" alt="Dots" className="dots" />
        <div className="image-group">
          <img
            src="/images/ellipse-5.svg"
            alt="Right Ellipse"
            className="ellipse"
          />
          <img
            src="/images/intersect2.svg"
            alt="Right Character"
            className="character"
          />
        </div>
      </div>
      <button onClick={onConneceted} className="welcome-btn">
        Welcome to Bitween!
      </button>
    </div>
  );
}

export default Connected;
