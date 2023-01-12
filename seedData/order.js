const { faker } = require("@faker-js/faker");

const orderData = [...Array(1)].map((singleItem) => ({
  invoice: faker.datatype.uuid(),
  total: faker.commerce.price(),
  date: faker.datatype.datetime(),
  user_id: 1, //Random 1-100
}));

module.exports = orderData;
