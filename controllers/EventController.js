//require the models folder
var db = require("../models");

var express = require("express");
var router = express.Router();


//"get" route for all current events...
router.get("/api/events", function(req, res) {
    db.Event.findAll({ include: [db.User, db.Comment] })
    // .populate("Comment")
    .then(function(allEvents) {
        res.json(allEvents);
    });
});

//"get" route for one specific event by ID
router.get("/api/events/:id", function(req, res) {
    db.Event.findOne({
        where: {id: req.params.id}
    }).then(function(data) {
        res.json(data);
    });
});

//post route for users to post a new event... 
router.post("/api/events", function(req, res) {
    console.log(req.body);
    //create a new event and pass it into an object
    db.Event.create({
        eventname: req.body.eventname,
        location: req.body.location,
        date: req.body.date,
        description: req.body.description,
        UserId: req.body.UserId
    }).then(function(newEvent) {
        res.json(newEvent);
    });
});

//delete route to delete their posting. For someone who has posted an item only. 
router.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({
        where: {id: req.params.id}
    }).then(function(data) {
        res.json(data);
    });
});

//PUT route for updating postings. For someone who has posted an item only. 
router.put("/api/events/:id", function(req, res) {
    db.Event.update({
        eventname: req.body.eventname, 
        location: req.body.location,
        date: req.body.date,
        description: req.body.description
    }, {
        where: { id: req.params.id }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;
