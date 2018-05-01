const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConfig = require("./config/database.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log("Error, exiting");
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Ok, test"
  });
});

require("./app/routes/post.routes.js")(app);

app.listen(4000, () => {
  console.log("Server luistert op poort 4000");
});
