/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Responde content-negotiation

app.use((req, res, next) => {
  // Response depends on requested format
  res.format({
    "text/plain": function () {
      res.send("Express");
    },

    "text/html": function () {
      res.send("<h1>Express</h1>");
    },

    "application/json": function () {
      res.send({ name: "Express" });
    },

    default: function () {
      // Unknown format
      res.status(406).send("Not Acceptable");
    },
  });
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
