import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/AM_White.png";

import "./__styles__/Header.scss";

export default function Header() {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="header-links">
        <Link to="/work" className="link">
          Work
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </nav>
  );
}
