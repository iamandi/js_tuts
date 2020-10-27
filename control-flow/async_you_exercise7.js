const async = require("async");
const http = require("http");

const args = process.argv;
const url = args[2];

let count = 0;
let body = "";
async.whilst(
  function test(cb) {
    cb(null, !body.includes("meerkat"));
  },

  function iter(callback) {
    count++;
    const req = http.get(url, (res) => {
      res
        .on("data", (chunk) => {
          body += chunk;
        })
        .on("end", () => {
          callback(null, body);
        });
    });
    req.on("error", (err) => {
      callback(err);
    });
  },

  function (err, res) {
    console.log(count);
  }
);
