module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
    });
    return Burger;
}