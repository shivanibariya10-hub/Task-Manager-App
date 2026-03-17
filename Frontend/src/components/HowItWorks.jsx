import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";  

const HowItWorks = () => {
  const navigate = useNavigate();
  
  return (
    <section className="how-section">
      <div className="how-container">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 className="feature-title">
            From Start to <span className="highlight">Finish</span>
          </h2>
          <p className="feature-subtitle">
            A frictionless onboarding experience that gets you and your team productive in minutes, not days.
          </p>
        </div>

        <div className="how-grid">
          <div className="how-card glass-panel">
            <span className="step-icon">1</span>
            <h3>Create Account</h3>
            <p>Sign up securely in seconds and instantly access your personalized workspace.</p>
            <button className="btn-outline-premium" style={{marginTop: '15px'}} onClick={() => navigate("/auth")}>Get Started</button>
          </div>

          <div className="how-card glass-panel">
            <span className="step-icon" style={{background: 'radial-gradient(circle at top, #f472b6, #db2777)'}}>2</span>
            <h3>Build Your Workflow</h3>
            <p>Create lists, map out your projects, and capture tasks before they slip your mind.</p>
          </div>

          <div className="how-card glass-panel">
            <span className="step-icon" style={{background: 'radial-gradient(circle at top, #34d399, #059669)'}}>3</span>
            <h3>Track & Celebrate</h3>
            <p>Monitor progress in real-time. Check off tasks and watch your productivity soar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
