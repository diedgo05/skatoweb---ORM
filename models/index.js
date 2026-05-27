const Sequelize = require("sequelize");
const config = require("../config/config.json");

// Lee primero las variables de entorno (Docker) y, si no existen,
// cae al config.json (desarrollo local). Así NO rompemos el flujo local.
const sequelize = new Sequelize(
  process.env.DB_NAME || config.development.database,
  process.env.DB_USER || config.development.username,
  process.env.DB_PASS || config.development.password,
  {
    host: process.env.DB_HOST || config.development.host,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || config.development.dialect,
    logging: false,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.User = require("./user")(sequelize, Sequelize);
db.Trick = require("./trick")(sequelize, Sequelize);
db.Guide = require("./guide")(sequelize, Sequelize);
db.Category = require("./FN/category")(sequelize, Sequelize);
db.Difficulty = require("./FN/difficulty")(sequelize, Sequelize);
db.LevelTrick = require("./FN/levelTrick")(sequelize, Sequelize);
db.LevelUser = require("./FN/levelUser")(sequelize, Sequelize);

module.exports = db;