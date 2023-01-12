const { faker } = require("@faker-js/faker");

const orderData = [...Array(100)].map((singleItem) => ({
  invoice: faker.datatype.uuid(),
  total: faker.commerce.price(),
  date: faker.datatype.datetime(),
  user_id: Math.floor(Math.random() * 100) + 1, //Random 1-100
}));

module.exports = orderData;
