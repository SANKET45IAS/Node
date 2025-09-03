// personRouter.js
const express = require("express");
const router = express.Router();
//Router mean to enhance the code readablity seperating endPoint into a different folder

const Person = require("../../MongoDB4/Models/person");

// -----------------
// CREATE (POST)
// -----------------
router.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json({ message: "✅ Person saved", data: newPerson });
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
    const people = await Person.find();
    res.status(200).json({ message: "✅ All persons fetched", data: people });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// Get person by ID
router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ error: "❌ Person not found" });
    res.status(200).json({ message: "✅ Person fetched", data: person });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// Get person by email (Parameterized API example)
router.get("/email/:email", async (req, res) => {
  try {
    const person = await Person.findOne({ email: req.params.email });
    if (!person) return res.status(404).json({ error: "❌ Person not found" });
    res.status(200).json({ message: "✅ Person fetched by email", data: person });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// -----------------
// UPDATE (PUT)
// -----------------
router.put("/:id", async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPerson) return res.status(404).json({ error: "❌ Person not found" });
    res.status(200).json({ message: "✅ Person updated", data: updatedPerson });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});

// -----------------
// DELETE (DELETE)
// -----------------
router.delete("/:id", async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) return res.status(404).json({ error: "❌ Person not found" });
    res.status(200).json({ message: "✅ Person deleted", data: deletedPerson });
  } catch (err) {
    res.status(500).json({ error: "❌ Server error", details: err });
  }
});
module.exports = router;
