import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profileBox">
      <img className="profile" src="assets/sabin.png" alt="Profile" />
      <span className="profileText">Sabin Shrestha</span>
      <span className="online">ON</span>
    </div>
  );
}
