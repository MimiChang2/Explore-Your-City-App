/* global $ */
//routing for the users table

var db = require("../models");

var express = require("express");

var router = express.Router();

//get route to see all users

router.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
        res.json(allUsers);
    });
});

router.get("/api/user", function(req, res) {
    // db query to get userId from database if it already exist
    // or add user if user doesn't exist
    db.User.findOrCreate({
        where: { firebaseId: req.query.userId },
        defaults:{
            email: req.query.email,
        }
    }).then(function(responseArr){
        // when done, store MySQL id in session storage
        //***this needs to return sequelize id and not firebase!****
        res.json(responseArr[0].dataValues.id);
    });
});
    // db.User.findAll({ include: [db.Event, db.Comment, db.RSVP] }).then(function(allUsers) {
    //     res.json(allUsers);
    // });

//"get" route for one specific user by ID
router.get("/api/users/:id", function(req, res) {
    db.User.findOne({
        where: { id: req.params.id}
    }).then(function(data) {
        res.json(data);
    });
});

// delete route for user
router.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
        where: {id: req.params.id}
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;