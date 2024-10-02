const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Difficulty = sequelize.define('Difficulty', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Difficulty;
}