const Sequelize = require("sequelize");
const db = require("../db");


const Cart = db.define("cart", {
  // order_id
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
