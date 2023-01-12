const { faker } = require("@faker-js/faker");

const orderLineItemsData = [...Array(100)].map((singleLineItem, index) => ({
  // id: index+1,
  quantity: faker.datatype.number({min: 1, max:100, precision:1}),
  price: faker.commerce.price(),
  order_id: index + 1,
  product_id: faker.datatype.number(100),
}));



module.exports = orderLineItemsData;
