const express = require("express");
const app = express();
const router = require("./routes/auth");
const path = require("path");
const pool = require("./utils/database");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v13/udemy", router);

app.use("*", function (req, res) {
  res.send("<h1>Page Not Found</h1>");
});

app.use(express.static(path.join(__dirname, "./", "public", "add-item.html")));

const startServer = async () => {
  try {
    const data = await pool.execute("SELECT * FROM test");
    if (!data) {
      process.exit(0);
    }
    app.listen(3000, () => console.log("Server running on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();