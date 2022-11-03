/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Paths

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.get("/user", (req, res) => {
  res.send("Hello from /user");
});

app.get("/my.secret", (req, res) => {
  res.send("Hello from /my.secret");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
