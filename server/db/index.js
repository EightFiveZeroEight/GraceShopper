//this is the access point for all things database related!

const db = require("./db");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const CartItems = require("./models/CartItems");
const OrderLineItems = require("./models/OrderLineItems");
const Orders = require("./models/Orders");

//associations could go here!
Product.hasMany(OrderLineItems, { as: "items", foreignKey: "product_id" });
// Product.hasMany(OrderLineItems, { as: 'items', foreignKey: 'product_id' });: This association creates a one-to-many relationship between the Product and OrderLineItems models, where each product can have multiple order line items, but each order line item belongs to one product. This association also creates an items accessor on the Product model, which allows you to retrieve all of the associated order line items.
OrderLineItems.belongsTo(Product, { as: "product", foreignKey: "product_id" });
// OrderLineItems.belongsTo(Product, { as: 'product', foreignKey: 'product_id' });: This association creates the inverse relationship of the above, It creates a many-to-one relationship between the OrderLineItems and Product models.

User.hasMany(Orders, { as: "orders", foreignKey: "user_id" });
// User.hasMany(Orders, { as: 'orders', foreignKey: 'user_id' });: This association creates a one-to-many relationship between the User and Orders models, where each user can have multiple orders, but each order belongs to one user. This association also creates an orders accessor on the User model, which allows you to retrieve all of the associated orders.
Orders.belongsTo(User, { as: "user", foreignKey: "user_id" });
// Orders.belongsTo(User, { as: 'user', foreignKey: 'user_id' });: This association creates the inverse relationship of the above, It creates a many-to-one relationship between the Orders and User models.

User.hasOne(Cart, { as: "cart", foreignKey: "user_id" });
// User.hasOne(Cart, { as: 'cart', foreignKey: 'user_id' });: This association creates a one-to-one relationship between the User and Cart models, where each user can have one cart. This association also creates a cart accessor on the User model, which allows you to retrieve the associated cart.
Cart.belongsTo(User, { as: "user", foreignKey: "user_id" });
// Cart.belongsTo(User, { as: 'user', foreignKey: 'user_id' });: This association creates the inverse relationship of the above, It creates a one-to-one relationship between the Cart and User models.


Cart.hasMany(CartItems, { as: "items", foreignKey: "cart_id" });
// Cart.hasMany(CartItems, { as: 'items', foreignKey: 'cart_id' });: This association creates a one-to-many relationship between the Cart
CartItems.belongsTo(Cart, { as: "cart", foreignKey: "cart_id" });

Orders.hasMany(OrderLineItems, { as: "items", foreignKey: "order_id" });
OrderLineItems.belongsTo(Orders, { as: "order", foreignKey: "order_id" });
// OrderLineItems.belongsTo(Product, { as: 'product', foreignKey: 'product_id' });: This association creates the inverse relationship of the above, It creates a many-to-one relationship between the OrderLineItems and Product models.

// This will create a new model called cart, which will represent the join table for the many-to-many relationship between User and Product. Each row in the cart table will have a userId and a productId that link the user to the product they have added to their cart.

// You can then use the addProduct and getProducts methods that Sequelize generates based on this association to add products to a user's cart and retrieve the products in a user's cart.

module.exports = {
  db,
  models: {
    User,
    Product,
    Orders,
    CartItems
  },
};
