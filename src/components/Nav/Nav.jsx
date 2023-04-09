import React from "react";

import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="list">
        <li className="list-item">
          <a className="list-link" href="#">
            Home
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            About
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
