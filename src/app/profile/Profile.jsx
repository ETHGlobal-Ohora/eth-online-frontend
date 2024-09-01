import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
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
      <h2 className="profile-name">James</h2>
      <p className="profile-username">@James</p>
    </div>
  );
}

export default Profile;
