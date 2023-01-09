//this is the access point for all things database related!

const db = require('./db')
const Product = require('./models/Product')

const User = require('./models/User')

//associations could go here!
User.hasMany(Product, { through: "cart" });
Product.belongsToMany(User, { through: "cart" });

// This will create a new model called cart, which will represent the join table for the many-to-many relationship between User and Product. Each row in the cart table will have a userId and a productId that link the user to the product they have added to their cart.

// You can then use the addProduct and getProducts methods that Sequelize generates based on this association to add products to a user's cart and retrieve the products in a user's cart.

module.exports = {
  db,
  models: {
    User,
  },
}
