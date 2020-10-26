const http = require("http");
const async = require("async");

const args = process.argv;
const hostname = args[2];
const port = args[3];

function addUser(user_id, next) {
  const data = JSON.stringify({ user_id });
  const options = {
    hostname,
    port,
    path: `/users/create`,
    method: "POST",
    headers: {
      "Content-Length": data.length,
    },
  };
  const req = http.request(options, (res) => {
    res.on("data", () => {});
    res.on("end", function () {
      next();
    });
  });

  req.on("error", function (err) {
    next(err);
  });

  req.write(data);
  req.end();
}

async.series(
  {
    postRequest: function (callback) {
      async.times(
        5,
        function (n, next) {
          addUser(n + 1, function (err) {
            next(err);
          });
        },
        function (err, res) {
          if (err) callback(err);
          callback(null);
        }
      );
    },
    getRequest: function (callback) {
      http
        .get(`http://${hostname}:${port}/users`, (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk.toString();
          });
          res.on("end", () => {
            callback(null, body);
            //console.log(body);
          });
        })
        .on("error", (err) => {
          callback(err);
        });
    },
  },
  function (err, results) {
    if (err) console.log(err);

    console.log(results.getRequest);
  }
);
