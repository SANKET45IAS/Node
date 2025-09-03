// Import the os module(A Built-In Module of Node.js)
const os = require("os");

// System information
console.log("Operating System:", os.type());        // e.g. Windows_NT, Linux
console.log("Platform:", os.platform());            // e.g. win32, linux, darwin
console.log("Architecture:", os.arch());            // e.g. x64
console.log("Hostname:", os.hostname());            // Computer name
console.log("Uptime (in seconds):", os.uptime());   // System uptime

// CPU Information
console.log("\nCPU Information:");
console.log(os.cpus());   // Array of CPU core info

// Memory Information
console.log("\nMemory Info:");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");

// User Info
console.log("\nUser Info:");
console.log(os.userInfo());

// Network Interfaces
console.log("\nNetwork Interfaces:");
console.log(os.networkInterfaces());
