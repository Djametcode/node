const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getAllUser,
  addUser,
  getSpesificUse,
} = require("../controller/controller");

router.get("/get-all-user", getAllUser);
router.post("/add-user", addUser);
router.get("/get-user", getSpesificUse);

module.exports = router;
