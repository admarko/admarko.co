import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/AM_White.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          {/* TODO: fix this */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* <li>
            <Link to="/notes">Notes</Link>
          </li> */}
      </nav>
    </header>
  );
}
