const Sequelize = require("sequelize");
const config = require("../config/config.json");
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
db.User = require("./user")(sequelize, Sequelize);
db.Trick = require("./trick")(sequelize, Sequelize);
db.Guide = require("/guide")(sequelize, Sequelize);
db.Category = require("/category")(sequelize, Sequelize);
db.Difficulty = require("/difficult")(sequelize, Sequelize);
db.LevelTrick = require("/lt")(sequelize, Sequelize);
db.LevelUser = require("/lu")(sequelize, Sequelize);

module.exports = db;
