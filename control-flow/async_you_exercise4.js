const http = require("http");
const async = require("async");

const args = process.argv;
const urls = args.slice(2);

async.map(
  urls,
  (url, done) => {
    let body = "";
    const req = http
      .get(url, (res) => {
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          return done(null, body);
        });
      })
      .on("error", function (err) {
        return done(err);
      });
    req.end();
  },
  function (err, res) {
    if (err) return console.log(err);

    console.log(res);
  }
);
