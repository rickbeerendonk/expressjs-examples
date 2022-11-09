/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";
import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "./swagger.json";

const app = express();
const port = 3000;

// Add Swagger

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

// Methods for different HTTP verbs

app.get("/", (req, res) => {
  res.send("Received a GET request");
});

app.get("/customers", (req, res) => {
  res.send("Received a GET request");
});

app.post("/customers", (req, res) => {
  res.send("Received a POST request");
});

app.put("/customers/:id", (req, res) => {
  res.send("Received a PUT request");
});

app.patch("/customers/:id", (req, res) => {
  res.send("Received a PATCH request");
});

app.delete("/customers/:id", (req, res) => {
  res.send("Received a DELETE request");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
