const Sequelize = require('sequelize');


const sequelize = new Sequelize('appointment', 'root', 'connectnode', {
    dialect: 'mysql',
    host: 'localhost'  
});

module.exports = sequelize;
  


