"use strict";

const {
  db,
  models: { User, Product, Orders, Cart, CartItems, OrderLineItems },
} = require("../server/db");
const userData = require("../seedData/users");
const productData = require("../seedData/products");
const orderData = require("../seedData/order");
const cartData = require("../seedData/Cart");
const cartItemsData = require("../seedData/cartItems");
const orderLineItemsData = require("../seedData/orderLineItems");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(
    // User.create({username: 'yo', userType: 'admin', password: 'password', email: 'yo@gmail.com'}),
    userData.map((user) => User.create(user))
  );
  //create products
  const products = await Promise.all(
    productData.map((products) => Product.create(products))
  );
  //create orders
  const orders = await Promise.all(
    orderData.map((order) => Orders.create(order))
  );
  // create cart
  const carts = await Promise.all(cartData.map((cart) => Cart.create(cart)));
  //create cartItems
  const cartItems = await Promise.all(
    cartItemsData.map((item) => CartItems.create(item))
  );
  // create orderLineItems
  const orderLineItems = await Promise.all(
    orderLineItemsData.map((item) => OrderLineItems.create(item))
  );
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users,
    products,
    orders,
    carts,
    cartItems,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
