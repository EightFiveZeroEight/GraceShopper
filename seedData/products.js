const {faker} = require('@faker-js/faker');
const productType = ["food", "clothing", "electronics"];
let randomUserType = () => {
	let randomIndex = Math.floor(Math.random() * productType.length);
	return productType[randomIndex];
};
const random = () => Math.floor(Math.random() * 100);


const productsData = [...Array(100)].map((singleProduct) => ({
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  category: randomUserType(),
  quantity: faker.datatype.number(100),
}));

// const productsData = [
//   {
//     name: 'Electronic Plumbus',
//     price: 10.99,
//     category: 'electronics',
//     inStock: true,
//     quantity: 10
//   },
//   {
//     name: 'Real Fake Door',
//     price: 25.99,
//     category: 'electronics',
//     inStock: true,
//     quantity: 5
//   },
//   {
//     name: 'Apple',
//     price: .99,
//     category: 'food',
//     inStock: true,
//     quantity: 500
//   },
//   {
//     name: 'Affliction T-Shirt',
//     price: 25.89,
//     category: 'clothing',
//     inStock: true,
//     quantity: 30
//   },
//   {
//     name: 'Jeans',
//     price: 55.99,
//     category: 'clothing',
//     inStock: true,
//     quantity: 10
//   },
//   {
//     name: 'Frozen Pizza',
//     price: 10.99,
//     category: 'food',
//     inStock: true,
//     quantity: 10
//   },
// ]

module.exports = productsData
