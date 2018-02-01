// Dependencies
// =============================================================
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var nodeadmin = require("nodeadmin");
var path = require("path");
var db = require("./models");

var connection = require("./config/connection.js")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(logger("dev"));
app.use(nodeadmin(app));

app.use(express.static("public"));
app.use(express.static("client/build"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.set("view engine", "handlebars");

//Routes
// require("./public/assets/scripts/apiRoutes.js")(app);

var CommentController = require("./controllers/CommentController.js");
app.use("/", CommentController);

var EventController = require("./controllers/EventController.js");
app.use("/", EventController);

var RSVPController = require("./controllers/RSVPController.js");
app.use("/", RSVPController);

var UserController = require("./controllers/UserController.js");
app.use("/", UserController);

// This shouldn't be needed, covered by app.use(express.static("public"))
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.get("/events/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/comments.html"));
});

app.get("/events", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/events.html"));
});

app.get("/comments", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/comments.html"));
});

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});