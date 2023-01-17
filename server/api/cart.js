const router = require("express").Router();
const {
  models: { Cart, CartItems, Product },
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
