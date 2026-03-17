// Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const tasks = [
    { id: 1, title: "Task 1", priority: "High", desc: "Finish report ASAP", progress: 70 },
    { id: 2, title: "Task 2", priority: "Low", desc: "ASAP DO IT NOW", progress: 40 },
  ];

  const stats = {
    total: 2,
    completed: 1,
    pending: 1,
    completionRate: 50,
  };

  return (
    <div className="dashboard">
      {/* ===== SIDEBAR ===== */}
      <div className="sidebar">
        <div className="dashboard-title">TaskFlow</div>
        <div className="user-box">
          <div className="user-name">Hey, Hexagon</div>
          <div className="user-tagline">Let's crush some tasks!</div>
        </div>
        <div className="progress-label">Productivity</div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${stats.completionRate}%` }}></div>
        </div>
        <ul className="menu">
          <li>Dashboard</li>
          <li className="active">Pending Tasks</li>
          <li>Completed Tasks</li>
        </ul>
        <div className="pro-tip">
          <p>Use keyboard shortcuts to boost productivity!</p>
          <a href="#">Visit Hexagon Digital Services</a>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">
        <div className="page-title">Pending Task</div>
        <div className="sort-bar">
          <button>Newest</button>
          <button>Oldest</button>
          <button>Priority</button>
        </div>
        <div className="add-task">+ Add New Task</div>

        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <div>{task.title}</div>
              <div className={`badge ${task.priority.toLowerCase()}`}>{task.priority}</div>
            </div>
            <div className="task-desc">{task.desc}</div>
            <div className="progress">
              <div className="progress-fill" style={{ width: `${task.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== STATS PANEL ===== */}
      <div className="stats-panel">
        <h3>Task Statistics</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <div>{stats.total}</div>
            <div>Total Tasks</div>
          </div>
          <div className="stat-box">
            <div>{stats.completed}</div>
            <div>Completed</div>
          </div>
          <div className="stat-box">
            <div>{stats.pending}</div>
            <div>Pending</div>
          </div>
          <div className="stat-box">
            <div>{stats.completionRate}%</div>
            <div>Completion</div>
          </div>
        </div>
        <div className="progress-label">Task Progress</div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${stats.completionRate}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
