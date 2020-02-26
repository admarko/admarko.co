import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import butterCMSLogo from "../images/butter-black.png";

import "./__styles__/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        Deployed on{" "}
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>{" "}
        with content from{" "}
        <a
          href="https://buttercms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={butterCMSLogo} alt="ButterCMS" />
        </a>
      </div>
      <div className="me">Alex Markowitz &copy; 2020</div>
      <div className="contact">
        Contact Me:{" "}
        <a
          href="http://www.github.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
        </a>
        <a
          href="mailto:admarko@gmail.com?Subject=admarko.xyz"
          target="_top"
          rel="noopener noreferrer"
        >
          GMail
        </a>
        <a
          href="http://www.linkedin.com/in/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          LI
        </a>
        <a
          href="http://www.instagram.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
        <a
          href="http://www.facebook.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fb
        </a>
        {/* {faFacebook} */}
        {/* <FontAwesomeIcon icon="faFacebook" /> */}
        <a
          href="https://www.snapchat.com/add/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          SC
        </a>
      </div>
    </div>
  );
}
