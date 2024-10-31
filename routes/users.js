const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log("User Request Time: ", Date.now());
    next();
});

// define the base user page routes
// note that the base route "/" is actually
// "/users/", because of the way the main app
// uses this router within index.js
router
    .route("/")
    .get((req, res) => {
        // views/profile.pug
        res.render("profile");
    })
    .post((req, res) => {
        res.send("Create User");
    })
    .delete((req, res) => {
        res.send("Delete User");
});

// define the user settings page
// similarly, this route is "/users/settings".
router.get("/settings", (req, res) => {
    res.send("Get User Settings");
});

module.exports = router;
