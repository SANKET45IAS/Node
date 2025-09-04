const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },

  redg: { type: String, required: true, unique: true },

  age: { type: Number, min: 18, max: 30},

  // 🎯 Enum for skills (can only choose from this list)
  skills: {
    type: [String],
    enum: ["Java", "Python", "React", "Node.js", "MongoDB", "C++"],
  },
});

const Student = mongoose.model("Student", studentSchema,"Students_List");
module.exports = Student;
