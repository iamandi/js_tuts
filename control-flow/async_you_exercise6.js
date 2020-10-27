const querystring = require("querystring");
const http = require("http");
const async = require("async");

const args = process.argv;
const url = args[2];

function makeHttpRequest(item, callback) {
  let body = "";

  const req = http.get(url + "?number=" + item, (res) => {
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      callback(null, body);
    });
  });
  req.on("error", (err) => {
    callback(err);
  });
  req.end();
}

let sum = 0;
async.reduce(
  ["one", "two", "three"],
  0,
  (memo, item, callback) => {
    makeHttpRequest(item, (err, res) => {
      if (err) return err;

      sum = sum + parseInt(res);
      callback(null, sum);
    });
  },
  function (err, result) {
    // result is now equal to the last value of memo, which is 6
    if (err) console.log(err);

    console.log(result);
  }
);
