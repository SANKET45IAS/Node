const mongoose = require("mongoose");

//Table Model

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  isVerified: { type: Boolean, default: false },

  age: { type: Number, min: 0, max: 120 },

  // 🎯 Enum for skills (can only choose from this list)
  skills: {
    type: [String],
    enum: ["Java", "Python", "React", "Node.js", "MongoDB", "C++"],
  },

  address: {
    street: String,
    city: { 
      type: String, 
      enum: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"] 
    },
    state: {
      type: String,
      enum: ["Odisha", "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana"]
    },
    pincode: Number,
  },
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
