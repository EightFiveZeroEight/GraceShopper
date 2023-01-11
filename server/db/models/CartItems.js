const Sequelize = require("sequelize");
const db = require("../db");

const CartItems = db.define("cartItems", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    default: 1,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    default: 1,
  }
});

module.exports = CartItems;
