const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const levelTrick = sequelize.define(
    "LevelTrick",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return levelTrick;
};
