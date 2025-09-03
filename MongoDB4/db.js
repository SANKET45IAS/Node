const mongoose = require("mongoose");

// ----------------------
// 1. MongoDB Connection
// ----------------------
const mongoURL = "mongodb://127.0.0.1:27017/myDbs";

mongoose 
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;

db.on("connected", () => {console.log("✅ Mongoose connected to Db")});
db.on("error", (err) => console.error("❌ Mongoose connection error:", err));
db.on("disconnected", () => console.log("⚠️ Mongoose disconnected"));
// When Node.js exits, stop MongoDB
process.on("exit", () => {
  mongoProcess.kill();
  console.log("stop Mongo");
});

module.exports=db;