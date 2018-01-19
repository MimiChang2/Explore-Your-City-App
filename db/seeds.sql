use events_db;

INSERT INTO Users(username, email, password)
VALUES("partyfriends", "partytime@gmail.com", "password")

INSERT INTO Events(eventname, location, date, description)
VALUES("super bowl party", "Charlotte, NC", "Feb 4, 2018", "watch the super bowl")

INSERT INTO Comments(text)
VALUES("this is my first comment")

INSERT INTO RSVP(boolean)
VALUES("false")
