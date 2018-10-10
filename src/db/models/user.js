'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: { msg: "must be a valid email" }
    }
  },
  password: {
   type: DataTypes.STRING,
   allowNull: false
   }
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Profile, {
       foreignKey: "userId",
       as: "profile"
     });

    // associations can be defined here
  };
  return User;
};
