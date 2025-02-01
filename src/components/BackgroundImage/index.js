import React from "react";
import "./style.css";
import charanLogo from "../../images/charanlogo.svg.svg";

const BackgroundImage = () => {
  return (
    <div className="main-bg">
      <img
        src={charanLogo}
        alt="logo"
        style={{ width: "100px", height: "100px" }}
      />
      <h2>Pasupuleti's Invite</h2>
      <h3 style={{ textAlign: "center" }}>
        Together with our families and friends invite you to be a part of our
        celebration
      </h3>
      <h4 style={{ fontSize: "16px", fontWeight: "400", opacity: "0.8" }}>
        16 Feb, 2025 | 11:45 PM
      </h4>
    </div>
  );
};

export default BackgroundImage;
