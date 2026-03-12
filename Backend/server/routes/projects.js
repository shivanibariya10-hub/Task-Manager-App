const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const { protect } = require("../middleware/auth");

// Get all projects for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const projects = await Project.find({ creatorId: req.user.id });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create new project
router.post("/", protect, async (req, res) => {
  const { name, desc, status, members, tag, date } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Project name is required" });
  }

  try {
    const project = await Project.create({
      name,
      desc,
      status,
      members,
      tag,
      date,
      creatorId: req.user.id,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update project
router.put("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.creatorId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete project
router.delete("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.creatorId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await project.deleteOne();
    res.json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
