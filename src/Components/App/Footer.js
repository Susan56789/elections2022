import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Description */}
          <div className="footer-column">
            <h3 className="footer-brand">
              Kenya Elections
            </h3>
            <p className="footer-description">
              Your trusted source for transparent electoral information. 
              Empowering Kenyan citizens with accurate, real-time election data.
            </p>
            <div className="accent-bars">
              <div className="accent-bar green"></div>
              <div className="accent-bar yellow"></div>
              <div className="accent-bar red"></div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/President" className="footer-link">Presidential Elections</a></li>
              <li><a href="/Governor" className="footer-link">Governor Elections</a></li>
              <li><a href="/MCA" className="footer-link">MCA Elections</a></li>
              <li><a href="/MP" className="footer-link">MP Elections</a></li>
              <li><a href="/Senator" className="footer-link">Senetor Elections</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact & Social */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@kenyanelections.ke</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+254 700 000 000</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a href="#facebook.com" className="social-link">f</a>
              <a href="x.com" className="social-link">x</a>
              <a href="instagram.com" className="social-link">inst</a>
              <a href="linkedin.com" className="social-link">lkn</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            
            {/* Copyright */}
            <div className="copyright-section">
              <p className="copyright-text">
                © {new Date().getFullYear()} Kenya Elections. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="legal-links">
              <a href="/" className="legal-link">Privacy Policy</a>
              <a href="/" className="legal-link">Terms of Service</a>
              <a href="/" className="legal-link">Support</a>
            </div>
            
            {/* Attribution */}
            <div className="attribution">
              <a 
                href="https://quirkwebstudios.co.ke/" 
                target="_blank" 
                rel="noreferrer"
                className="attribution-link"
              >
                Crafted by Quirk Web Studios
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="footer-accent"></div>
    </footer>
  );
}

export default Footer;