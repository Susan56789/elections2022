import React from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://media.istockphoto.com/photos/kenya-flag-4k-picture-id1321131238?b=1&k=20&m=1321131238&s=170667a&w=0&h=J92vrvLbYTrfyq_yodmpp8cyBrsst-D2_H11F9feVQw=" alt="logo" />
      </div>




      <ul className="nav-links">
        <div className="menu">
          <li >
            <a href="/">Home</a>
          </li>
          <li  >
            <a href="/About">About</a>
          </li>
          <li  >
            <a href="/Governor">Governor</a>
          </li>
          <li  >
            <a href="/MCA">MCA</a>
          </li>
          <li  >
            <a href="/Senator">Senate</a>
          </li>
          <li  >
            <a href="/Womanrep">Women Rep</a>
          </li>
          <li  >
            <a href="/MP">National Assembly</a>
          </li>
          <li  >
            <a href="/President">President</a>
          </li>


        </div>
      </ul>
    </div>
  );
}
export default Navbar;