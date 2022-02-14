import React from "react";
import logo from "../../src/assets/logo-3.png";
import Twitter from "../../src/assets/twitter.png";
import Discord from "../../src/assets/discord.png";
import Instagram from "../../src/assets/instagram.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <a
            href="/"
            onClick={(e) => {
              let showcase = document.getElementById("tsparticles");
              e.preventDefault();
              showcase &&
                showcase.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
            }}
          >
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="copyrights">
          <p>Copyright 2022 © Spuds</p>
        </div>
        <div className="footer-social-links">
          <a
            href="https://twitter.com/SnugglySpuds"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twiiter" />
          </a>
          <a
            href="https://discord.gg/sx4VwQsCee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="discord" />
          </a>
          <a
            href="https://www.instagram.com/snugglyspuds/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
