const { urlencoded } = require("express");
const express = require("express");
const querystring = require("querystring");
const app = express();

let data = [];

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  res.send(data);
});

app.post("/users/create", (req, res) => {
  console.log("req.body", req.body);
  data.push(req.body);
  res.send(data);
});

app.get("/", (req, res) => {
  console.log("req.query", req.query);
  res.send(req.query.number);
});

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`);
});
