import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="logo">Kenya 2022 Election Results</div>
      <ul className="nav-links">
        <div className="menu">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/About">About</a>
          </li>
          <li className="items">
            <a href="/Governor">Governor</a>
          </li>
          <li className="items">
            <a href="/MCA">MCA</a>
          </li>
          <li className="items">
            <a href="/Senator">Senator</a>
          </li>
          <li className="items">
            <a href="/Womanrep">WomanRep</a>
          </li>
          <li className="items">
            <a href="/MP">MP</a>
          </li>
          <li className="items">
            <a href="/President">President</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
