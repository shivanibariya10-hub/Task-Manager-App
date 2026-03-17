import React from "react";
import "./dashboardpreview.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Using a placeholder image styling to simulate a dashboard if image isn't available
// In a real scenario, dashboardImg should be a high-quality mockup.
const DashboardPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard-preview">
      <div className="dashboard-container">

        <div className="dashboard-text">
          <h2>Command your workflow from a <span className="text-highlight">single hub</span>.</h2>
          <p>
            Experience a command center designed for clarity. See everything from high-level project progress to individual task details without breaking your flow.
          </p>

          <ul className="dashboard-features">
            <li>
              <div className="feature-check"><FaCheck size={14} /></div>
              <span>Real-time task synchronization</span>
            </li>
            <li>
              <div className="feature-check"><FaCheck size={14} /></div>
              <span>Visual progress analytics</span>
            </li>
            <li>
              <div className="feature-check"><FaCheck size={14} /></div>
              <span>Seamless drag-and-drop boards</span>
            </li>
          </ul>

          <button className="btn-premium" onClick={() => navigate("/dashboard")}>
            Explore Dashboard <FaArrowRight style={{marginLeft: '8px'}}/>
          </button>
        </div>

        <div className="dashboard-image">
          {/* Abstract representation of a dashboard if image is missing, 
              or replace with an actual high-res mock image */}
          <img 
              src="/dashboard_mockup_1773723181762.png" 
              alt="Dashboard Mockup Image" 
              style={{
                width: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)'
              }} 
            />
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
