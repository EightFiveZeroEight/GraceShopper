const { faker } = require("@faker-js/faker");

const cartItemsData = [...Array(1)].map((singleCart, index) => ({
  quantity: (Math.floor(Math.random() * 100)+1),
  productId: (Math.floor(Math.random() * 100)+1),
  cart_id: index + 1,
}));

module.exports = cartItemsData;
