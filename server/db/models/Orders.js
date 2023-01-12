const Sequelize = require("sequelize");
const db = require("../db");

const Orders = db.define("orders", {
  invoice: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    default: "Text not set",
  },
});

module.exports = Orders;
