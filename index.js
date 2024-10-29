const express = require("express");
const ejs = require("ejs");
const parser = require("body-parser");
const app = express();
const port = 3000;

app.engine("html", ejs.renderFile);
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

// To load the middleware function
app.use(logReq);
app.use(parser.json());
