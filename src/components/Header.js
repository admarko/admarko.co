import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">[LOGO]</Link>
        </div>
        {/* <li>
            <Link to="/notes">Notes</Link>
          </li> */}
      </nav>
    </header>
  );
}
