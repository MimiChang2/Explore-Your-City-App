//require the models folder
var db = require("../models");

var express = require("express");
var app = express();
var router = express.Router(); 
app.use(router);

//"get" route for all comments....
router.get("/api/comments", function(req,res) {
    db.Comment.findAll({include: [db.User, db.Event]}).then(function(allComments){
        console.log(allComments);
        res.json(allComments);
    });
});

//"get" route for comments on one specific event by ID
router.get("/api/events/:id/comments", function(req, res){
    db.Event.findOne({ include: [db.Comment],
        id: req.params.id
    }).then(function(data){
        res.json(data.Comments);
    });
});

//"POST" route for users to post a new comment....
router.post("/api/comments", function(req, res){
    console.log(req.body);
    db.Comment.create({
        textbody: req.body.textbody
    }).then(function(newComment){
        res.json(newComment);
    });
});

//delete route to delete a comment
router.delete("/api/comments/:id", function(req, res){
    db.Comment.destroy({
        id: req.params.id
    }).then(function(data){
        res.json(data);
    });
});

//updating a comment
router.put("/api/comments", function(req, res){
    db.Comment.update({
        textbody: req.body.textbody
    }, {
        where: {id: req.body.id}
    }).then(function(data){
        res.json(data);
    });
});


module.exports = router;