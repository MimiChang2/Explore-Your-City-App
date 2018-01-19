module.exports = function(sequelize, DataTypes) {
    
    var Comment = sequelize.define("Comment", {
        textbody: {
            type: DataTypes.STRING(120),
            allowNull:true,
            validate: {
                len: [10, 120]
            }
        },
    });
    
    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        
        Comment.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Comment; 
};

//add association, comment belong to user and event

//through table - join table 
//table that sits between 2 other tables
//belong to User and Event
//RSVP also belong to User and Event
//User have many comments, events
//Events have many users, comments, rsvp
