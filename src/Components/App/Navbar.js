import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="logo">Kenya 2022 Election Results</div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Governor">Governor</a>
          </li>
          <li>
            <a href="/MCA">MCA</a>
          </li>
          <li>
            <a href="/Senator">Senator</a>
          </li>
          <li>
            <a href="/Womanrep">WomanRep</a>
          </li>
          <li>
            <a href="/MP">MP</a>
          </li>
          <li>
            <a href="/President">President</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
