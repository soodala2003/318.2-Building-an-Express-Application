const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();
const port = 3000;

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const loginRoutes = require("./routes/login");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/login", loginRoutes);
app.use(express.static("images")); //, postRoutes);

app.set("view engine", "pug"); // register the template engine
// ../views
app.set("views", path.join(__dirname, "views"));

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //res.send("Keeping it simple.");
  res.render("home");
});

app.get("/download-image", (req, res) => {
  res.download("./images/exhuma.jpg");
}); 

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
