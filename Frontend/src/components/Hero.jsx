import React from "react";
import "./Hero.css";
import { FaSearch, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-bg-glow animate-pulse-glow"></div>
      <div className="hero-bg-glow-2 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
            Manage Work. <br />
            <span className="text-gradient">Achieve More.</span>
          </h1>

          <p>
            Experience the future of task management. An elegant, powerful, 
            and intelligent platform to align your team and accelerate your goals.
          </p>

          <div className="hero-search">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="What do you need to get done?" />
            <button className="search-btn" onClick={() => navigate("/auth")}>Start Free</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">100k+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">5M+</span>
              <span className="stat-label">Tasks Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">4.9/5</span>
              <span className="stat-label">User Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FLOATING UI */}
        <div className="hero-right">

          {/* Main Task Card */}
          <div className="glass-widget task-widget animate-float">
            <div className="widget-header">
              <h3>Today's Priorities</h3>
              <span className="widget-badge">3 Tasks</span>
            </div>
            <ul className="task-list">
              <li className="task-item done">
                <div className="task-checkbox"><FaCheckCircle size={10} color="white" /></div>
                <span>Sync with design team</span>
              </li>
              <li className="task-item">
                <div className="task-checkbox"></div>
                <span style={{color: 'var(--text-main)'}}>Finalize Q3 roadmap</span>
              </li>
              <li className="task-item">
                <div className="task-checkbox"></div>
                <span>Review PR #1042</span>
              </li>
            </ul>
          </div>

          {/* Progress Card */}
          <div className="glass-widget progress-widget animate-float-delayed">
            <div className="progress-info">
              <span style={{color: 'var(--text-main)'}}>Project Alpha</span>
              <span style={{color: 'var(--accent)'}}>75%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '75%' }}></div>
            </div>
            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.8rem', marginBottom: 0}}>
              On track to complete by Friday
            </p>
          </div>

          {/* Stats Card */}
          <div className="glass-widget stats-widget animate-float-slow">
            <div className="stats-icon-wrapper">
              <FaRocket />
            </div>
            <div className="stats-text">
              <strong>+24%</strong>
              <p>Productivity Boost</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;