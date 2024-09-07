import React from "react";

function SendRequest() {
  return (
    <div className="request-container">
      <p>
        Send Request <br /> for partner
      </p>
      <input
        type="email"
        placeholder="Email"
        className="email-input"
        required
      />
      <button className="send-button">
        <img src="/images/vector.svg" alt="Send Icon" />
        Send
      </button>
    </div>
  );
}

export default SendRequest;
