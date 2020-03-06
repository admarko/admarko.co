import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import butterLogo from "../images/butter-black.png";
import netlifyLogo from "../images/netlifyBlack.png";

import "./__styles__/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        Deployed on{" "}
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
          <img src={netlifyLogo} alt="Netlify" className="netlifyLogo" />
        </a>{" "}
        with content from{" "}
        <a
          href="https://buttercms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={butterLogo} alt="ButterCMS" className="butterLogo" />
        </a>
      </div>
      <div className="me">Alex Markowitz &copy; 2020</div>
      <div className="contact">
        Contact me: <FontAwesomeIcon icon={faAt} size="xs" />
        admarko on{" "}
        <a
          href="http://www.github.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faGithub} />
        </a>
        <a
          href="mailto:admarko@gmail.com?Subject=admarko.xyz"
          target="_top"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faGoogle} />
        </a>
        <a
          href="http://www.linkedin.com/in/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faLinkedinIn} />
        </a>
        <a
          href="http://www.instagram.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faInstagram} />
        </a>
        <a
          href="http://www.facebook.com/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faFacebookF} />
        </a>
        <a
          href="https://www.snapchat.com/add/admarko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={Brands.faSnapchatGhost} />
        </a>
      </div>
    </div>
  );
}
