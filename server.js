// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  const { headers } = req;
  const ip = /::ffff:/.test(req.ip)
    ? req.ip.replace("::ffff:", "")
    : req.ip.replace("::", "");
  const language = headers["accept-language"];
  const software = headers["user-agent"];
  res.json({ ip, language, software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log(
    "Your app is listening on port " +
      `http://localhost:${listener.address().port}/`
  );
});
