//user table

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [5, 100]
            }
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [5, 300]
            }
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [5, 300]
            }
        },
    });

    //associate user with events, RSVP, and comments. 
    //If a user is deleted, then all of the listings and bookings from that user will be deleted

    User.associate = function(models) {
        User.hasMany(models.Event, {
            onDelete: "cascade"
        });
        User.hasMany(models.RSVP, {
            onDelete: "cascade"
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    return User;
};