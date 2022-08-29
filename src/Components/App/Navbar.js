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
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/governor">Governor</a>
          </li>
          <li>
            <a href="/mca">MCA</a>
          </li>
          <li>
            <a href="/senator">Senator</a>
          </li>
          <li>
            <a href="/womanrep">WomanRep</a>
          </li>
          <li>
            <a href="/mp">MP</a>
          </li>
          <li>
            <a href="./Results/President.js">President</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
