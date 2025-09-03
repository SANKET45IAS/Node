// npm install lodash (Data Handling)

// Import lodash
const _ = require("lodash");

// Array Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Chunk:", _.chunk(numbers, 3));   // Split into chunks of size 3
console.log("Reverse:", _.reverse([...numbers])); // Reverse copy of array
console.log("Shuffle:", _.shuffle(numbers)); // Random shuffle

// Object Example
const user = { name: "Sanket", age: 21, address: { city: "Deogarh", state: "Odisha" } };
console.log("Get nested property:", _.get(user, "address.city", "Not Found")); // Safe access
console.log("Has property:", _.has(user, "address.state")); // true

// Deep Clone
const cloneUser = _.cloneDeep(user);
cloneUser.address.city = "Bhubaneswar";
console.log("Original User City:", user.address.city);   // still "Deogarh"
console.log("Cloned User City:", cloneUser.address.city); // "Bhubaneswar"

// String Example
console.log("CamelCase:", _.camelCase("Hello World Example"));
console.log("KebabCase:", _.kebabCase("Hello World Example"));
console.log("UpperCase:", _.toUpper("hello lodash"));

// Math Example
console.log("Sum:", _.sum([10, 20, 30]));
console.log("Max:", _.max([10, 55, 23, 99]));
console.log("Min:", _.min([10, 55, 23, 99]));
console.log("Random (1-100):", _.random(1, 100));
