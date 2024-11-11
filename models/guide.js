const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define(
    "Guide",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateCreate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "LevelUsers",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idTrick: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Tricks",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      timestamps: false,
    }
  );
  return Guide;
};
