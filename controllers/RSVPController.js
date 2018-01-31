//require the models folder
var db = require("../models");

var express = require("express");
var router = express.Router(); 

//"get" route for all RSVP....
router.get("/api/rsvp", function(req,res) {
    db.RSVP.findAll({include: [db.User, db.Event]}).then(function(allRSVP){
        console.log(allRSVP);
        res.json(allRSVP);
    });
});

router.post("/api/rsvp", function(req, res){
    db.RSVP.create({
        UserId: req.body.UserId,
        EventId: req.body.EventId
    }).then(function(newRSVP){
        res.json(newRSVP);
    });
});

module.exports= router;