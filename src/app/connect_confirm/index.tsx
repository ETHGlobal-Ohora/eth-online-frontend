import React from "react";
import "./Connect_confirm.css";

function ConnectConfirm() {
  return (
    <div className="connect-confirm-container">
      <h1 className="connect-confirm-title">
        Connection request <br /> has been received
      </h1>
      <div className="connect-confirm-image-container">
        <img
          src="/images/intersect.svg"
          alt="Profile background"
          className="connect-confirm-background"
        />
        <img
          src="/images/ellipse-5.svg"
          alt="Profile Picture"
          className="connect-confirm-picture"
        />
      </div>
      <h2 className="connect-confirm-name">James</h2>
      <div className="connect-confirm-buttons">
        <button className="connect-confirm-ignore">
          This is someone I don't know
        </button>
        <button className="connect-confirm-confirm">Confirm</button>
      </div>
    </div>
  );
}

export default ConnectConfirm;
