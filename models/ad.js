'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define('Ad', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Ad.associate = function(models) {
    Ad.hasMany(models.Comment);
  };
  return Ad;
};