'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('tk_users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};