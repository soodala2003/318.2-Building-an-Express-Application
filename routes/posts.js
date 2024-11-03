const express = require("express");
const router = express.Router();
//router.use(express.static("images"));

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("User Request Time: ", Date.now());
  next();
});

// define the base post page routes
// note that the base route "/" is actually
// "/posts/", because of the way the main app
// uses this router within index.js
router
    .route("/")
    .get((req, res) => {
        // views/profile.pug
        res.render("posts");
    })
    .post((req, res) => {
        res.send("Create User");
    })
    .delete((req, res) => {
        res.send("Delete User");
});

module.exports = router;