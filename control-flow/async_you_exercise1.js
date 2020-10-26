const async = require("async");
const http = require("http");
const fs = require("fs");

const urls = process.argv;

async.waterfall(
  [
    function (cb) {
      fs.readFile(urls[2], "utf-8", (err, res) => {
        if (err) return cb(err);

        cb(null, res);
      });
    },
    function (body, cb) {
      http
        .get(body, function (res) {
          res.on("data", function (chunk) {
            body = chunk.toString();
          });
          res.on("end", function () {
            cb(null, body);
          });
        })
        .on("error", function (err) {
          cb(err);
        });
    },
  ],
  function (err, res) {
    if (err) return console.error(err);
    console.log(res);
  }
);
