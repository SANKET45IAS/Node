const express = require("express");
const router = express.Router();
//Router mean to enhance the code readablity seperating endPoint into a different folder

const Student=require("../stdModel")


// -----------------
// CREATE (POST)
// -----------------
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: "✅ Student saved", data: newStudent });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "❌ Duplicate key error", details: err.keyValue });
    } else {
      res.status(500).json({ error: "❌ Server error", details: err });
    }
  }
});

// -----------------
// READ (GET)
// -----------------

// Get all persons
router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({ message: "✅ All Student fetched", data: student });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// Get person by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "❌ Student not found" });
    res.status(200).json({ message: "✅ Student fetched", data: student });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// Get student by registration number
router.get("/redg/:redg", async (req, res) => {
  try {
    const student = await Student.findOne({ redg : req.params.redg });
    if (!student) return res.status(404).json({ error: "❌ Student not found" });
    res.status(200).json({ message: "✅ Student fetched by Redg", data: student });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// -----------------
// UPDATE (PUT)
// -----------------
// Update student by registration number
router.put("/:redg", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { redg: req.params.redg },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) return res.status(404).json({ error: "❌ Student not found" });
    res.status(200).json({ message: "✅ Student updated", data: updatedStudent });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});
// -----------------
// DELETE (DELETE)
// -----------------
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent= await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: "❌ Student not found" });
    res.status(200).json({ message: "✅ Person deleted", data: deletedStudent });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});
module.exports = router;
