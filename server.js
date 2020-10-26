const express = require("express");
const app = express();

let data = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  res.send(data);
});

app.post("/users/create", (req, res) => {
  console.log("req.body", req.body);
  data.push(req.body);
  res.send(data);
});

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`);
});
