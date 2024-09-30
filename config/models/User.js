const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'user' });

module.exports = User;

// models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, { sequelize, modelName: 'post' });

Post.belongsTo(User, { foreignKey: 'userId' });
module.exports = Post;
