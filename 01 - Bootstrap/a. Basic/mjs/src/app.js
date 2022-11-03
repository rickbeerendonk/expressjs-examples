import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
