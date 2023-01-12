const Sequelize = require("sequelize");
const db = require("../db");

const OrderLineItems = db.define("orderLineItems", {
  // product_id
  // order_id
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderLineItems;
