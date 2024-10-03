const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define("Guide", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Guide;
};
