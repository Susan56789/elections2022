import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Governor", href: "/Governor" },
    { name: "Senate", href: "/Senator" },
    { name: "Women Rep", href: "/Womanrep" },
    { name: "President", href: "/President" }
  ];

  // Function to check if a link is active
  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" 
            alt="Kenya Flag" 
            className="logo"
          />
          <span className="brand-text">Election Results</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={item.href} 
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item">
              <a 
                href={item.href} 
                className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;