import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/AM_Black.png";

import "./__styles__/Header.scss";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <Link to="/notes"></Link>
      </nav>
    </div>
  );
}
