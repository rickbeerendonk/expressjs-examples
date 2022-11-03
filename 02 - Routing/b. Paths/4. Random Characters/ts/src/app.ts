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

app.get("/a*b", (req, res) => {
  // /ab
  // /a_random_b
  // /a{anything}b
  // etc...
  res.send("Hello from /a(anything)b");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
