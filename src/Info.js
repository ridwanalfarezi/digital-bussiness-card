import React from "react";
import me from "./img/me.png";
import email from "./icons/Mail.svg"
import linkedin from "./icons/linkedin.svg";

const Info = () => {
  return (
    <div className="info">
      <img src={me} />
      <h1 className="name">Ridwan Alfarezi</h1>
      <h3 className="title">Frontend Developer</h3>
      <a href="https://ridwanalfarezi.github.io/" className="web">bit.ly/ridwanalfarezi</a>
      <div className="social">
        <a href="" className="social-button email">
          <img src={email} width="16px"/>
          <span>Email</span>
        </a>
        <a href="" className="social-button linkedin">
          <img src={linkedin} width="16px"/>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Info;
