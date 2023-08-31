const express = require("express");
const app = express();
const router = require("./routes/auth");
const path = require("path");

app.use(
  "/api/v13/udemy",

  // function (req, res, next) {
  //   const header = req.headers.authorization;

  //   if (!header) {
  //     return res.json({ msg: "Please login first" });
  //   }
  //   next();
  // },

  router
);

app.use("*", function (req, res) {
  res.send("<h1>Page Not Found</h1>");
});

app.use(express.static(path.join(__dirname, "./", "public", "add-item.html")));

app.listen(3000, () => console.log("Server running on port 3000"));
