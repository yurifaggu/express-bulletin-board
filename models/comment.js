'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    author: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Ad, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

  };
  return Comment;
};