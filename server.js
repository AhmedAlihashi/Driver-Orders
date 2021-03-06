require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const db = require("./db.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/orders"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
