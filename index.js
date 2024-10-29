const express = require("express");
const ejs = require("ejs");
const parser = require("body-parser");

const app = express();
const port = 3000;

// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("html", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "hrml"); // register the template engine
// To load the middleware function
// serve static files from the styles directory
//app.use(logReq);
//app.use(parser.json());













//app.engine("html", ejs.renderFile);
//app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/express", (req,res) => {
  res.send("Creating routes with Express is simple!");
});

app.get("/login", (req, res) => {
  res.send("Received a GET request for login!");
});

app.post("/login", (req, res) => {
  res.send("Received a POST request for login!");
});


app.get("/login/:userID", (req, res) => {
  res.send(`Navigated to the login page for: ${req.params.userID}.`);
});

const logReq = function (req, res, next) {
  console.log("Request Received");
  next();
};


