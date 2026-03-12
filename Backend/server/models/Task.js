const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "In Progress", enum: ["Pending", "In Progress", "Completed"] },
    priority: { type: String, default: "Medium", enum: ["Low", "Medium", "High", "Critical"] },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
