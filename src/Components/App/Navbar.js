import React from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="logo navbar-brand">
        <img src="https://media.istockphoto.com/photos/kenya-flag-4k-picture-id1321131238?b=1&k=20&m=1321131238&s=170667a&w=0&h=J92vrvLbYTrfyq_yodmpp8cyBrsst-D2_H11F9feVQw=" alt="logo" />
      </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav-links navbar-nav">
          <div className="menu">
            <li clasName="nav-item" >
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li clasName="nav-item" >
              <a className="nav-link" href="/About">About</a>
            </li>
            <li clasName="nav-item" >
              <a className="nav-link" href="/Governor">Governor</a>
            </li>
            {/***
             * <li clasName="nav-item">
              <a className="nav-link" href="/MCA">MCA</a>
            </li>
             */}
            <li clasName="nav-item" >
              <a className="nav-link" href="/Senator">Senate</a>
            </li>
            <li clasName="nav-item" >
              <a className="nav-link" href="/Womanrep">Women Rep</a>
            </li>
            {/***
             * <li  >
              <a className="nav-link" href="/MP">National Assembly</a>
            </li>
             */}
            <li clasName="nav-item" >
              <a className="nav-link" href="/President">President</a>
            </li>


          </div>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;