const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
  res.redirect("/hw1.yml");
});

app.get("/hw0.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/hw0.html"));
});

app.get("/image/andrew-schultz-DTSDD968Mpw-unsplash.jpg", function (req, res) {
  res.sendFile(
    path.join(__dirname, "/image/andrew-schultz-DTSDD968Mpw-unsplash.jpg")
  );
});

app.get("/hw1.yml", sendYML, function (req, res) {
  console.log("redirect to /hw0.html");
  res.sendFile(path.join(__dirname, "/hw1.yml"));
  res.redirect("/hw0.html");
});

// function sendYML(req, res, next) {
//   res.sendFile(path.join(__dirname, "/hw1.yml"));
//   console.log("hw1");
  
//   next();
//   return;
// }
app.listen(80 || 443);
