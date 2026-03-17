import React from "react";
import { FaCheckCircle, FaChartPie, FaTasks } from "react-icons/fa";
import "../styles/home.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        
        <h2 className="feature-title">
          Powerful Features <span className="highlight">Designed for Productivity</span>
        </h2>
        <p className="feature-subtitle">
          Manage tasks smarter with real-time tracking, intelligent organization, and a beautiful interface designed to keep you in the flow.
        </p>

        <div className="feature-grid">

          {/* Card 1 */}
          <div className="feature-card">
            <div className="icon pink" style={{background: 'linear-gradient(135deg, #ec4899, #be185d)'}}>
              <FaTasks />
            </div>
            <h3>Smart Task Management</h3>
            <p>Organize, prioritize, and track tasks effortlessly. Set due dates, assign tags, and break down complex projects into manageable steps.</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="icon blue">
              <FaCheckCircle />
            </div>
            <h3>Workflow Automation</h3>
            <p>Save time with customizable workflows. Automate repetitive tasks, status updates, and notifications so you can focus on deep work.</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="icon purple">
              <FaChartPie />
            </div>
            <h3>Visual Progress Tracking</h3>
            <p>Gain insights instantly with dynamic dashboard widgets. Track completed and pending tasks with visual reports and analytics.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
