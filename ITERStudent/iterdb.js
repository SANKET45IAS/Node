const mongoose = require("mongoose");
require('dotenv').config();

// ----------------------
// 1. MongoDB Connection
// ----------------------
// const mongoURL = "mongodb://127.0.0.1:27017/iter"; //Local

const atlasMongo=process.env.DB_URL;

const mongoURL = atlasMongo; //Atlas



mongoose 
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;

db.on("connected", () => {console.log("✅ Mongoose connected to Db")});
db.on("error", (err) => console.error("❌ Mongoose connection error:", err));
db.on("disconnected", () => console.log("⚠️ Mongoose disconnected"));
module.exports=db;