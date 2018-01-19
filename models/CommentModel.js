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
    
    return Comment; 
};

//through table - join table 
//table that sits between 2 other tables