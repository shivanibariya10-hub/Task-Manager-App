import React, { useState } from "react";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      alert("Please enter task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      status: status,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setStatus("Pending");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Add a New Task</h2>

        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={styles.input}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.input}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button onClick={handleAddTask} style={styles.button}>
          Add Task
        </button>
      </div>

      <div style={styles.list}>
        <h3>Task List</h3>

        {tasks.length === 0 ? (
          <p>No tasks added</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.name} — <b>{task.status}</b>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
  },
  card: {
    width: "300px",
    padding: "25px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1e90ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    marginTop: "20px",
  },
};
