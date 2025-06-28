import React from "react";
import "./home.css";
import Total from "./Total";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-background">
          <div className="animated-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="title-container">
            <div className="year-badge">2022</div>
            <h1 className="main-title">
              <span className="title-line">National Presidential</span>
              <span className="title-line highlight">Election Results</span>
            </h1>
            <div className="subtitle">
              <span className="subtitle-text">Live Vote Counting & Analytics Dashboard</span>
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                <span>LIVE</span>
              </div>
            </div>
          </div>
          
          <div className="stats-preview">
            <div className="stat-item">
              <div className="stat-icon">🗳️</div>
              <div className="stat-content">
                <div className="stat-number">47</div>
                <div className="stat-label">Counties</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">22.1M</div>
                <div className="stat-label">Registered Voters</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <div className="stat-number">4</div>
                <div className="stat-label">Candidates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="results-section">
        <div className="section-header">
          <h2 className="section-title">Election Results</h2>
          <div className="section-subtitle">Real-time vote tallying across all constituencies</div>
        </div>
        <Total />
      </div>
      
      <div className="floating-elements">
        <div className="floating-element fe-1">🗳️</div>
        <div className="floating-element fe-2">🇰🇪</div>
        <div className="floating-element fe-3">📊</div>
        <div className="floating-element fe-4">✨</div>
      </div>
    </div>
  );
}

export default Home;