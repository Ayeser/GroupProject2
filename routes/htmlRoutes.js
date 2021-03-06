db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/contest", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contest.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      app.get("/profile", function(req, res) {
        if (req.user) {
          res.sendFile(path.join(__dirname, "../public/profile.html"));
        } else {
          res.sendFile(path.join(__dirname, "../public/login.html"));
        }
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

}