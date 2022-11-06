/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Use static files from public folder

app.use(express.static("build/public"));
app.use(express.static("public"));

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
