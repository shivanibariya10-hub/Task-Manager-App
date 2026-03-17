import React, { useState } from "react";
import "./AppPreview.css";  
import { FaPlus, FaTasks, FaChartBar } from "react-icons/fa";

export default function AppPreview() {
  const [tab, setTab] = useState("dashboard");

  return (
    <section className="app-preview">
      <div className="app-preview-container">
        <h2 className="preview-title">Experience the <span className="highlight">Difference</span></h2>
        <p className="preview-subtitle">Take a sneak peek into the interface that makes productivity effortless.</p>

        <div className="preview-tabs">
          <button
            className={tab === "dashboard" ? "active" : ""}
            onClick={() => setTab("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={tab === "tasks" ? "active" : ""}
            onClick={() => setTab("tasks")}
          >
            Task List
          </button>

          <button
            className={tab === "add" ? "active" : ""}
            onClick={() => setTab("add")}
          >
            Add Task
          </button>
        </div>

        <div className="preview-screen">
          {tab === "dashboard" && (
            <div className="preview-content">
              <FaChartBar size={50} style={{color: 'var(--primary)', marginBottom: '20px'}}/>
              <h3>Dashboard Overview</h3>
              <p style={{color: 'var(--text-muted)'}}>Instantly see where your projects stand with rich visual data.</p>
            </div>
          )}
          
          {tab === "tasks" && (
            <div className="preview-content">
              <FaTasks size={50} style={{color: 'var(--accent)', marginBottom: '20px'}}/>
              <h3>Your Organized Tasks</h3>
              <p style={{color: 'var(--text-muted)'}}>Drag, drop, and conquer your daily checklist.</p>
            </div>
          )}
          
          {tab === "add" && (
            <div className="preview-content" style={{width: '100%'}}>
              <FaPlus size={40} style={{color: '#10b981', marginBottom: '20px'}}/>
              <h3>Create New Task</h3>
              <input className="preview-input" placeholder="What needs to be done?" />
              <br />
              <button className="preview-action-btn">Save Task</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
