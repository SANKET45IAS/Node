const express = require('express');
const app = express();
const port = 3000;

// 👉 Import MongoDB connection
const db = require("./iterdb");  // relative path (adjust if needed)
// const Person=require("../MongoDB4/Models/person");

// Middleware to parse JSON body
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 👉 Import Router
const studentRouter = require("./studentRouter/studentRouter");


// Root endpoint
app.get('/', (req, res) => {
  res.send("Siksha 'O' Anusandhan");
  
});

// Use Router for /person APIs
app.use("/student", studentRouter);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});