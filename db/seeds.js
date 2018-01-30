//import models -require models folder
var db = require("../models");

//finish creating users , force true in server to drop database (node server.js), 
//run seeds file again (node seeds.js in the db folder)

db.sequelize.sync({}).then(function() {
    console.log("Synchronizing Schema");
    
    db.User.create({
        // userName: "KristenSnowman",
        email: "KristenSnowman@gmail.com",
        firebaseId: "YnBrUkvqlxMOYcenSIR7ImM9xIk2"
        // password: "happysocks"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventname: "Super Bowl Watch Party",
            location: "Minneapolis, MN",
            date: "Feb 4, 2018",
            description: "watch the super bowl and eat!"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "bring some food and drinks!"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
            });
        });
    });
    
    //make next user here
     db.User.create({
        // userName: "JustinPenguin",
        email: "JustinPenguin@gmail.com",
        firebaseId: "pns7ut200BfqEagubppD1XwHgDR2"
        // password: "owlsarecute"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventname: "Coding Bootcamp Graduation Party",
            location: "Charlotte, NC",
            date: "Feb 2, 2018",
            description: "celebrate being done with coding bootcamp!"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "food, drinks, friends, fun!"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
            });
        });
    });
    
     db.User.create({
        // userName: "JessicaRabbit",
        email: "JessicaRabbit@gmail.com",
        firebaseId: "Pol4DLuEzGevWPJy2mH1amrO2qk1"
        // password: "bunnycarrots"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventname: "Jessica's Bridal Shower",
            location: "New York, NY",
            date: "March 10, 2018",
            description: "come celebrate Jessica getting married!"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "bring a gift and games to play!"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
            });
        });
    });
    
     db.User.create({
        // userName: "BobTheOwl",
        email: "BobTheOwl@gmail.com",
        firebaseId: "04Tf4m2GfqgGybjTTT8tUJdcYRx1"
        // password: "whyisanowlnamedbob"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventname: "Bob's 40th Birthday Bash!",
            location: "San Francisco, CA",
            date: "April 17, 2018",
            description: "Bob is getting old! Come celebrate his birthday!"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "everyone better come or bob will cry"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
            });
        });
    });
    
     db.User.create({
        // userName: "OliviaOwl",
        email: "OliviaOwl@gmail.com",
        firebaseId: "HXevCd6s3ISO3JslNsnvxaWnEUo2"
        // password: "anotherowl"
    }).then(newUser => {
        console.log(newUser.get('id'));

        db.Event.create({
            UserId: newUser.get('id'),
            eventname: "Beach Bash with Olivia!",
            location: "Miami, FL",
            date: "May 24, 2018",
            description: "ever been to the beach with an owl?"
        }).then(newEvent => {
            db.Comment.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
                textbody: "sun and fun! bring your hats and swimsuits!"
            });
            
            //make RSVP here
            db.RSVP.create({
                UserId: newUser.get('id'),
                EventId: newEvent.get('id'),
            });
        });
    });
});



// use events_db;

// INSERT INTO Users(username, email, password)
// VALUES("partyfriends", "partytime@gmail.com", "password")

// INSERT INTO Events(eventname, location, date, description)
// VALUES("super bowl party", "Charlotte, NC", "Feb 4, 2018", "watch the super bowl")

// INSERT INTO Comments(text)
// VALUES("this is my first comment")

// INSERT INTO RSVP(boolean)
// VALUES("false")