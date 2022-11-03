/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Paths

app.get("/", (req, res) => {
  res.send("Hello from /");
});

// Multiple matches

app.get("/ab?c", (req, res) => {
  // /abc
  // /ac
  res.send("Hello from /abc or /ac");
});

app.get("/a(bc)?d", (req, res) => {
  // /ad
  // /abcd
  res.send("Hello from /abcd or /ad");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
