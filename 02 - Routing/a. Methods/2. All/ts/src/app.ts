/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Load middleware for all HTTP verbs at a path

app.all("/", (req, res, next) => {
  res.send(`Received a ${req.method} request`);
  next(); // Call next middleware
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
