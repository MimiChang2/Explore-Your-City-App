/* global $ */
//routing for the users table

var db = require("../models");

var express = require("express");

var router = express.Router();

//get route to see all users

router.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Event, db.Comment, db.RSVP] }).then(function(allUsers) {
        res.json(allUsers);
    });
});


//"get" route for one specific user by ID
router.get("/api/users/:id", function(req, res) {
    db.Users.findOne({
        id: req.params.id
    }).then(function(data) {
        res.json(data);
    });
});

// delete route for user
router.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
        id: req.params.id
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;