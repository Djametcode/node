const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  return res.status(200).json({ msg: "Hello djamet" });
});

router.get("/home", function (req, res) {
  return res.sendFile(path.join(__dirname, "../", "views", "add-item.html"));
});

router.get("/contact", function (req, res) {
  return res.status(200).json({ msg: "Hello contact" });
});

module.exports = router;
