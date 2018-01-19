module.exports = function(sequelize, DataTypes) {
    
    var RSVP = sequelize.define("RSVP" , {});
    
    RSVP.associate = function(models) {
        RSVP.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        
        RSVP.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return RSVP;
};