import React from "react";
import "./Connected.css";
import { Navigate, useNavigate } from "react-router-dom";

function Connected() {
  const nav = useNavigate();
  const onConneceted = () => {
    nav("/");
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
      <button className="welcome-btn">Welcome to Bitween!</button>
    </div>
  );
}

export default Connected;
