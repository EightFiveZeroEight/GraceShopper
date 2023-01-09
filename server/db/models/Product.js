const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  // One user  ; many products
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // imageURL: {
  //   type: sequelize.
  //   allowNull: false,
  // },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM({ values: ["food", "clothing", "electronics"] }),
    allowNull: false,
  },
});

module.exports = Product;
