const { faker } = require("@faker-js/faker");

const cartItemsData = [...Array(1)].map((singleCart, index) => ({
  quantity: Math.floor(Math.random() * 100) + 1,
  productId: 1,
  belongs_to_cart:1,
  cartId: 1,
}));

module.exports = cartItemsData;
