import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../styles/home.css";  

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Master Your Workflow?</h2>
        <p>Join thousands of professionals who have revolutionized how they manage projects and hit their goals.</p>
        <button className="cta-btn" onClick={() => navigate("/auth")}>
          Start For Free <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CTA;
