const async = require("async");
const http = require("http");

const urls = process.argv;

async.series(
  {
    requestOne: function (done) {
      http
        .get(urls[2], (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk.toString();
          });
          res.on("end", () => {
            done(null, body);
          });
        })
        .on("error", (err) => {
          done(err);
        });
    },
    requestTwo: function (done) {
      http
        .get(urls[3], (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk.toString();
          });
          res.on("end", () => {
            done(null, body);
          });
        })
        .on("error", (err) => {
          done(err);
        });
    },
  },
  function (err, results) {
    if (err) throw new Error("err", err);

    console.log(results);
  }
);
