//import models -require models folder
var db = require("./models");

db.sequelize.sync({}).then(function() {
    console.log("Synchronizing Schema");
    
    db.User.create({
        userName: "newUser1234",
        email: "newemail@gmail.com",
        password: "pass1234567"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventName: "concert",
            location: "charlotte",
            date: "jan 20",
            description: "music fest"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "this is a new comment"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                
            })
        });
    });
    
    //make next user here
});


// module.exports = function(app){
//     //GET route for ALL events
//     app.get("/api/events", function(req, res){
//         db.Event.findAll({}).then(function(dbEvent){
//             res.json(dbEvent);
//     });
//     });

//     //GET route for ALL users
//     app.get("/api/users", function(req, res){
//         db.User.findAll({}).then(function(dbUser){
//             res.json(dbUser);
//         });
//     });

//     //POST route for saving a new event 
//     app.post("/api/events", function(req, res){
//         console.log(req.body);

//         db.Event.Create({
//             eventName: req.body.eventName,
//             location: req.body.location,
//             date: req.body.date, 
//             description: req.body.description
//         }).then(function(dbEvent){
//             res.json(dbEvent);
//         });
//     });

//     //POST route to create a new user
//     app.post("/api/users", function(req, res){
//         console.log(req.body);

//         db.User.Create({
//             userName: req.body.userName,
//             email: req.body.email,
//             password: req.body.password
//         }).then(function(dbUser){
//             res.json(dbUser);
//         });
//     });

//     //DELETE route for deleting an event
//     app.delete("/api/events", function(req, res){
//         db.Event.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(dbEvent){
//             res.json(dbEvent);
//         });
//     });

//     //DELETE a User
//     app.delete("/api/users", function(req, res){
//         db.User.destroy({
//             where: {
//                 id:req.params.id
//             }
//         }).then(function(dbUser){
//             res.json(dbUser);
//         });
//     });

//     //PUT ROUTE for updating events
//     app.put("/api/events", function(req, res){
//         db.Event.update({
//             eventName: req.body.eventName,
//             location: req.body.location,
//             date: req.body.date,
//             description: req.body.description
//         }, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function(dbEvent){
//             res.json(dbEvent);
//         });
//     });
// };



// //insert database data file
// //db.User.Create
// //db.Event.Create
// //16-sequelize
