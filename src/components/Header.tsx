import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/AM_Black.png";

import "./__styles__/Header.scss";

export default function Header() {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/work"> Work </Link>
        <Link to="/about">About </Link>
      </div>
    </nav>
  );
}
