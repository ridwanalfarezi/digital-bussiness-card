import React from "react";
import Twitter from "./icons/Twitter.svg";
import Facebook from "./icons/Facebook.svg";
import Instagram from "./icons/Instagram.svg";
import Github from "./icons/GitHub.svg";

const Footer = () => {
  return (
    <footer>
      <a href="#">
        <img src={Twitter} />
      </a>
      <a href="#">
        <img src={Facebook} />
      </a>
      <a href="#">
        <img src={Instagram} />
      </a>
      <a href="#">
        <img src={Github} />
      </a>
    </footer>
  );
};

export default Footer;
