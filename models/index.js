const Sequelize = require('sequelize');
const config = require('../../SKATOWeB/API_ORM/config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
