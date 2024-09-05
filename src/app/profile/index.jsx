import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const nav = useNavigate();
  const onProfile = () => {
    nav("/connect-code");
  };

  return (
    <div className="profile-container">
      <div className="step-indicator">
        <span className="step-number">1</span> /
        <span className="step-number-total">2</span>
      </div>
      <h1 className="profile-title">Make your Profile</h1>
      <div className="profile-image-container">
        <img
          src="/images/intersect.svg"
          alt="Profile background"
          className="profile-background"
        />
        <div id="circle"></div>
        <img src="/images/edit.svg" alt="Edit Profile" className="edit-icon" />
        <img
          src="/images/ellipse-5.svg"
          alt="Profile Picture"
          className="profile-picture"
        />
      </div>
      <form className="profile-form">
        <label className="nickname-label" htmlFor="nickname">
          Nickname
        </label>
        <div className="input-container">
          <span className="input-prefix">@</span>
          <input
            type="text"
            id="nickname"
            className="nickname-input"
            placeholder="Enter your nickname"
          />
        </div>
        <button type="submit" onClick={onProfile} className="next-button">
          next
        </button>
      </form>
    </div>
  );
}

export default Profile;
