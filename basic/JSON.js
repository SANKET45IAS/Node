// ------------------------------
// JSON Methods in JavaScript
// ------------------------------

// A normal JavaScript object
const user = {
  name: "Sanket",
  age: 21,
  skills: ["Java", "React", "Node.js"],
  address: { city: "Deogarh", state: "Odisha" }
};

// 1️⃣ JSON.stringify(obj)
// Convert JS object → JSON string
const jsonStr = JSON.stringify(user);
console.log("1. JSON Stringify:", jsonStr);

// 2️⃣ JSON.stringify(obj, replacer)
// Replacer can be an array (keep only selected keys)
const jsonStr2 = JSON.stringify(user, ["name", "age"]);
console.log("2. Stringify with Replacer (only name & age):", jsonStr2);

// 3️⃣ JSON.stringify(obj, replacer, space)
// Add indentation (pretty print JSON)
const jsonStr3 = JSON.stringify(user, null, 4);
console.log("3. Pretty JSON with spaces:\n", jsonStr3);

// 4️⃣ JSON.parse(jsonString)
// Convert JSON string → JS object
const obj1 = JSON.parse(jsonStr);
console.log("4. JSON Parse:", obj1);

// 5️⃣ JSON.parse(jsonString, reviver)
// Reviver function lets you modify values while parsing
const obj2 = JSON.parse(jsonStr, (key, value) => {
  if (key === "age") return value + 5; // Increase age by 5
  return value;
});
console.log("5. Parse with Reviver (age modified):", obj2);

// ------------------------------
// Extra Real-World Usage
// ------------------------------

// Save JSON to file & read back using fs
const fs = require("fs");

// Save JSON string to a file
fs.writeFileSync("user.json", jsonStr);

// Read JSON string back from file
const dataFromFile = fs.readFileSync("user.json", "utf8");

// Parse it back into object
const parsedData = JSON.parse(dataFromFile);
console.log("6. JSON from file:", parsedData);
