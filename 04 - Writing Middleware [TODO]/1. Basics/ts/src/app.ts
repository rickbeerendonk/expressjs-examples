/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Middleware

app.use(function (req, res, next) {
  console.log(`LOGGER (before next()): ${req.method} ${req.url}`);
  next();
  console.log(`LOGGER (after next()): ${req.method} ${req.url}`);
});

// Paths

app.get("/", (req, res) => {
  console.log(`GET handler: ${req.method} ${req.url}`);
  res.send("GET at /");
});

app.get("/user", (req, res) => {
  console.log(`GET handler: ${req.method} ${req.url}`);
  res.send("GET at /user");
});

// Methods

app.post("/", (req, res) => {
  console.log(`POST handler: ${req.method} ${req.url}`);
  res.send("POST at /");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
