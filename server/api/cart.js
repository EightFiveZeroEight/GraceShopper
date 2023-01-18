const router = require("express").Router();
const {
  models: { Cart, CartItems, Product, User },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/products", async (req, res, next) => {
  try {
    const eachProduct = await Cart.findAll({ include: Product });
    res.status(200).json(eachProduct);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/cartitems", async (req, res, next) => {
  try {
    const id = req.params.id;
    const cartItems = await CartItems.findAll({
      where: {
        belongs_to_cart: id,
      },
    });
    console.log(cartItems);
    res.status(200).json(cartItems);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id, count, user } = req.body;
    // console.log("**User**", user);
    const itemToAdd = await Product.findByPk(id);
    const cartToAddTo = await Cart.findByPk(user.id);
    // console.log(cartToAddTo);
    Cart.findByPk(user.id).then((cart) => {
      Product.findByPk(id).then((product) => {
        cart.addProduct(product, { through: { quantity: count } });
      });
    });
    res.status(200).json("0");
  } catch (err) {
    next(err);
  }
});
