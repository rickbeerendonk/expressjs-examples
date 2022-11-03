/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Paths

app.get("/", (req, res) => {
  res.send("Hello from /");
});

// Regular Expressions (no string as first parameter!)

app.get(/a/, (req, res) => {
  // Anything with an 'a'
  res.send("Hello from 'Anything with an a'");
});

app.get(/^\/bbb.*/, (req, res) => {
  // Anything beginning a '/bbb'
  res.send("Hello from 'Anything beginning with /bbb'");
});

app.get(/.*ccc$/, (req, res) => {
  // Anything ending a 'ccc'
  res.send("Hello from 'Anything ending with ccc'");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
