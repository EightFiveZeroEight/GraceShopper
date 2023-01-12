const { faker } = require("@faker-js/faker");

const cartData = [...Array(100)].map((singleCart, index) => ({
  user_id: index+1, // one cart to one user
  cartSession: faker.datatype.uuid(),
}));

module.exports = cartData;
