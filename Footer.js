import React from "react";

const Footer = props => {
  return (
    <div className="globalFooter">
      <div className="leftFooter">
        <a className="footerLinks" href="#logout">
          Logout
        </a>
      </div>
      <div className="centerFooter">2019 Copyright. OneLauraAshley</div>
      <div className="rightFooter">
        <a className="footerLinks" href="Images.html">
          Privacy
        </a>
        <a className="footerLinks" href="gsuite.html">
          Terms
        </a>
        <a className="footerLinks" href="myaccount.html">
          About
        </a>
      </div>
    </div>
  );
};

export default Footer;
