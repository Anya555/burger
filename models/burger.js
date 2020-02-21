module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.TINYINT(1)
    });
    return Burger;
}