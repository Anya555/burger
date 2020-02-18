module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burgers", {
    burgerID: DataTypes.INTEGER,   
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
    });
    return Burger;
}