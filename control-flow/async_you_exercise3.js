const http = require("http");
const async = require("async");

const args = process.argv;
const urls = args.slice(2);

async.each(
  urls,
  (url, done) => {
    http.get(url, (res) => {
      let body = "";
      res.on("data", (d) => {
        body += d;
      });
      res.on("end", () => {
        return done();
      });
    });
  },
  function (err) {
    if (err) console.log(err);
  }
);
