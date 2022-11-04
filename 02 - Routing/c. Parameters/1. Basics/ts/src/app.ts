/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Route Parameters

app.get("/order/:orderId/line/:lineId", (req, res) => {
  res.send(
    `Hello from order ${req.params.orderId} and line ${req.params.lineId}`
  );
});

// hyphen (-) and dot (.) are literal.

app.get("/:first.:second-:third", (req, res) => {
  res.send(
    `Hello from (1) ${req.params.first} (2) ${req.params.second} (3) ${req.params.third}`
  );
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
