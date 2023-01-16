const { faker } = require("@faker-js/faker");
const productType = ["food", "clothing", "electronics"];
let randomUserType = () => {
  let randomIndex = Math.floor(Math.random() * productType.length);
  return productType[randomIndex];
};
const random = () => Math.floor(Math.random() * 100);

// const productsData = [...Array(1)].map((singleProduct) => ({
//   name: faker.commerce.product(),
//   price: faker.commerce.price(),
//   category: randomUserType(),
//   quantity: faker.datatype.number(100),
// }));

const productsData = [
  {
    name: "Electronic Plumbus",
    price: 10.99,
    category: "electronics",
    inStock: true,
    quantity: 10,
  },
  {
    name: "Real Fake Door",
    price: 25.99,
    category: "electronics",
    inStock: true,
    quantity: 5,
  },
  {
    name: "Apple",
    price: 0.99,
    category: "food",
    inStock: true,
    quantity: 500,
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: "Affliction T-Shirt",
    price: 25.89,
    category: "clothing",
    inStock: true,
    quantity: 30,
  },
  {
    name: "Jeans",
    price: 55.99,
    category: "clothing",
    inStock: true,
    quantity: 10,
  },
  {
    name: "Frozen Pizza",
    price: 10.99,
    category: "food",
    inStock: true,
    quantity: 10,
  },
];

module.exports = productsData;
