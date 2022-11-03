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

app.get("/ab+c", (req, res) => {
  // /abc
  // /abbc
  // /abbbc
  // etc...
  res.send("Hello from /a(b)c");
});

app.get("/a(bc)+d", (req, res) => {
  // /abcd
  // /abcbcd
  // /abcbcbcd
  // etc...
  res.send("Hello from /a(bc)d");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
