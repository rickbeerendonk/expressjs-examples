/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Methods for different HTTP verbs

app.get("/", (req, res) => {
  res.send("Received a GET request");
});

app.post("/", (req, res) => {
  res.send("Received a POST request");
});

app.put("/", (req, res) => {
  res.send("Received a PUT request");
});

app.patch("/", (req, res) => {
  res.send("Received a PATCH request");
});

app.delete("/", (req, res) => {
  res.send("Received a DELETE request");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
