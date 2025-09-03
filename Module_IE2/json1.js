// Create a JS object
const user = {
  name: "Sanket",
  age: 21,
  city: "Deogarh"
};

// Convert object → JSON string
const jsonString = JSON.stringify(user);

// Export the JSON string
module.exports = jsonString;
