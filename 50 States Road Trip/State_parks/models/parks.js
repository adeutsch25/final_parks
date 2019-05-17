'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parks = sequelize.define('Parks', {
    name: DataTypes.STRING,
    visited: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    zoom: DataTypes.INTEGER
  }, {});
  Parks.associate = function(models) {
    // associations can be defined here
  };
  return Parks;
};