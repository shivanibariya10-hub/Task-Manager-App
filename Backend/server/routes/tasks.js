const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const { protect } = require("../middleware/auth");

// Get all tasks for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const tasks = await Task.find({ creatorId: req.user.id }).populate('projectId', 'name');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create new task
router.post("/", protect, async (req, res) => {
  const { title, description, status, priority, projectId } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Task title is required" });
  }

  try {
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      projectId,
      creatorId: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update task
router.put("/:id", protect, async (req, res) => {
  const { title, description, status, priority, projectId } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.creatorId.toString() !== req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, status, priority, projectId } },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete task
router.delete("/:id", protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.creatorId.toString() !== req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
