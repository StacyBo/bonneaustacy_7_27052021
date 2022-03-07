'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Post, {
        foreignKey: 'postId',
        allowNull: false,
        onDelete: 'CASCADE'
      });
      this.belongsTo(models.Users, {
        foreignKey: 'userId',
        allowNull: false,
        onDelete: 'CASCADE'
      });
    }
  };
  Comment.init({
    content: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  });

  return Comment;
};