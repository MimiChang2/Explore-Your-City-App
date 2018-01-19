//this is a table. var Events is the name of the table

//association joins (belongsTo and HasMany) go in the model 

module.exports = function(sequelize, DataTypes) {

    var Event = sequelize.define("Event", {
        eventName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [5, 40]
            }
        },
        location: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [6, 40]
            }
        },
        date: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [4, 40]
            }
        },
        description: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [5, 100]
            }
        },
    });

    Event.associate = function(models) {
        // This will add the user id to the Event
        // The foreign key added to the Event is the user id.

        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        // This will add the Event id to the RSVP and Comments
        // Each event can have many Comments and RSVPs
        // The foreign key added to the Comment and RSVP is the Event id.
        Event.hasMany(models.Comment, {
            foreignKey: {
                allowNull: false
            }
        });
        
        Event.hasMany(models.RSVP, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Event;
};