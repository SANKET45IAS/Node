const express = require('express');
const app = express();
const port = 3000;

// 👉 Import MongoDB connection
const db = require("../MongoDB4/db");  // relative path (adjust if needed)
// const Person=require("../MongoDB4/Models/person");

// Middleware to parse JSON body
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 👉 Import Router
const personRouter = require("./personRouter/personRouter");


// Root endpoint
app.get('/', (req, res) => {
  res.send("Hello World! I'm your cook....");
  
});

// Use Router for /person APIs
app.use("/person", personRouter);

//Resonse JSON
app.get('/object', (req, res) => {
  var person = {
    redg: 9465,
    name: "Sanket",
    age: 20
  };
  res.send(person);
});

// Example endpoint with all req methods explained
app.get('/object/:id', (req, res) => {
  
  // 1️⃣ req.params → Path parameters
  // URL: http://localhost:3000/object/101
  // Output: { id: "101" }
  const pathParams = req.params;

  // 2️⃣ req.query → Query parameters
  // URL: http://localhost:3000/object/101?name=Sanket&age=20
  // Output: { name: "Sanket", age: "20" }
  const queryParams = req.query;

  // 3️⃣ req.headers → Request headers (like tokens, auth info)
  // Example: req.headers['user-agent']
  const headers = req.headers;

  // 4️⃣ req.ip → Client IP address
  const clientIp = req.ip;

  // 5️⃣ req.method → HTTP method used (GET in this case)
  const method = req.method;

  // 6️⃣ req.protocol → http or https
  const protocol = req.protocol;

  // 7️⃣ req.originalUrl → Full URL the client requested
  const fullUrl = req.originalUrl;

  // Example person object
  var person = {
    redg: 9465,
    name: "Sanket",
    age: 20
  };

  // Send all info together
  res.json({
    message: "Request details",
    pathParams,
    queryParams,
    headers: {
      "user-agent": headers["user-agent"],
      "content-type": headers["content-type"]
    },
    clientIp,
    method,
    protocol,
    fullUrl,
    person
  });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Output
// {
//   "message": "Request details",
//   "pathParams": {
//     "id": "101"
//   },
//   "queryParams": {
//     "name": "Sanket",
//     "age": "20"
//   },
//   "headers": {
//     "user-agent": "Mozilla/5.0 ...",
//     "content-type": undefined
//   },
//   "clientIp": "::1",
//   "method": "GET",
//   "protocol": "http",
//   "fullUrl": "/object/101?name=Sanket&age=20",
//   "person": {
//     "redg": 9465,
//     "name": "Sanket",
//     "age": 20
//   }
// }
