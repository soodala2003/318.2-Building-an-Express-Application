const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/express", (req,res) => {
  res.send("Creating routes with Express is simple!");
});

app.get("/user", (req, res) => {
  res.send("Received a GET request for user!");
});

app.post("/user", (req, res) => {
  res.send(`Success!`);
});


app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

const logReq = function (req, res, next) {
  console.log("Request Received");
  next();
};

// To load the middleware function
app.use(logReq);
