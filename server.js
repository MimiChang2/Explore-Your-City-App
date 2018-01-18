// Dependencies
// =============================================================
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require("body-parser");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;
var nodeadmin = require("nodeadmin");
app.use(nodeadmin(app));

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//app.set("view engine", "handlebars");

var CommentRoute = require("./controllers/CommentController.js");
app.use("/", CommentRoute);

var EventRoute = require("./controllers/EventController.js");
app.use("/", EventRoute);

var RSVPRoute = require("./controllers/RSVPController.js");
app.use("/", RSVPRoute);

var UserRoute = require("./controllers/UserRoute.js");
app.use("/", UserRoute);


db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});