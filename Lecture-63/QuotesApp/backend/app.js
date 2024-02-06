const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");

mongoose
  .connect("mongodb://127.0.0.1:27017/quotes")
  .then(function () {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("Error in DB", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello from root" });
});

// seedDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Backend Server connected at PORT: ${PORT}`);
});
