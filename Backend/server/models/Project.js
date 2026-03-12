const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    status: { type: String, default: "Active", enum: ["Active", "Completed", "Archived"] },
    members: { type: Number, default: 1 },
    tag: { type: String },
    date: { type: String },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
