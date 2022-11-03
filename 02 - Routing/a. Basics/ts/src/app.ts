import express from "express";

const app = express();
const port = 3000;

// Different Routes

app.get("/", (req, res) => {
  res.send("Hello from /");
});

app.get("/user", (req, res) => {
  res.send("Hello from /user");
});

// Different HTTP verbs

app.post("/user", (req, res) => {
  res.send("/user received a POST request");
});

app.put("/user", (req, res) => {
  res.send("/user received a PUT request");
});

app.patch("/user", (req, res) => {
  res.send("/user received a PUT request");
});

app.delete("/user", (req, res) => {
  res.send("/user received a PATCH request");
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
