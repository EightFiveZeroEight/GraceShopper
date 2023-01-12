const userType = ["admin", "user", "guest"];
const { faker } = require("@faker-js/faker");

const randomUserId = Math.floor(Math.random() * 100);

const orderData = [...Array(100)].map((singleItem) => ({
  invoice: faker.datatype.uuid(),
  total: faker.commerce.price(),
  date: faker.datatype.datetime(),
  user_id: randomUserId,
}));

module.exports = orderData;
