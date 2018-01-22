//require the models folder
var db = require("../models");

var express = require("express");
var app = express();
var router = express.Router(); 
app.use(router);

//"get" route for all RSVP....
router.get("/api/rsvp", function(req,res) {
    db.RSVP.findAll({include: [db.User, db.Event]}).then(function(allRSVP){
        console.log(allRSVP);
        res.json(allRSVP);
    });
});

module.exports= router;