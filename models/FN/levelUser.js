const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const levelUser = sequelize.define('LevelUser', {
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
    return levelUser;
}