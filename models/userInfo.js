const Sequelize = require("sequelize");


const sequelize = require("../db/connect");

const User  = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },


  Email: {
    type: Sequelize.STRING,
    allowNull: false
  }
   

  
});

module.exports = User;