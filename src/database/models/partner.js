'use strict';
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define('tk_partners', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    wallet_address: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    currency: DataTypes.ENUM('IDR', 'BTC', 'ETH'),
    document: DataTypes.STRING
  }, {
    underscored: true
  });
  Partner.associate = function(models) {
    // associations can be defined here
  };
  return Partner;
};