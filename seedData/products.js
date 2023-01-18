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
    name: "Portal Gun",
    price: 10.99,
    category: "electronics",
    inStock: true,
    quantity: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOelisrpi62KJHpMYbE31Pn6oww0kwemiaWg&usqp=CAU'
  },
  {
    name: "Real Fake Door",
    price: 25.99,
    category: "electronics",
    inStock: true,
    quantity: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxilHAa2PC6TD3KFjTECCwVCxPFE9Pd54aA&usqp=CAU'
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSjezYT4MC2ifWe-vAbIxjd3BOGl_Pag8gLCXXVuiBF220S3VzEKW6L7OtFZ0FXc7TIk&usqp=CAU'
  },
  {
    name: "Jeans",
    price: 55.99,
    category: "clothing",
    inStock: true,
    quantity: 10,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCmJPew8BASG1LsDTM6WifbTTSZr5VtAZYgUW2ibzCGpidhdElDB5YKw0vRG02lZas63SLYxRU_5c&usqp=CAc'
  },
  {
    name: "Frozen Pizza",
    price: 10.99,
    category: "food",
    inStock: true,
    quantity: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOFkzzYrI7eJYh3Sxl26Qyb2uzAk6KHakk1WeVEWRv5akETy_TB6y1BAkC3J8mOjP8L4&usqp=CAU'
  },
];

module.exports = productsData;
