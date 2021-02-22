const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello world2!");
});

module.exports = app;
