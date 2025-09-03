// Import JSON string from data.js
const userJson = require("./json1.js");

// Convert JSON string → JS object
const userObj = JSON.parse(userJson);

console.log("JSON String:", userJson);
console.log("Parsed Object:", userObj);
console.log("Name:", userObj.name);
console.log("Age:", userObj.age);
console.log("City:", userObj.city);
