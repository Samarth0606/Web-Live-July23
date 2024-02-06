import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="nav">
      <h2>Main Quotes App</h2>
      <ul>
        <li>
          <Link to="/"> All Quotes </Link>
        </li>
        <li>
          <Link to="/new"> New Quote </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
