'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmail: { msg: "must be a valid email" }
     },
     userId: {
       type: DataTypes.INTEGER,
       onDelete: "CASCADE",
       references: {
         model: "User",
         key: "id",
         as: "userId",
       }
   }
   },
    location: DataTypes.STRING
  }, {});

  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    // associations can be defined here
  };
  return Profile;
};
