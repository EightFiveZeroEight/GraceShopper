const router = require("express").Router();
const {
  models: { Cart, CartItems },
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

router.get("/:id/cartitems", async (req, res, next) => {
  try {
    const id = req.params.id
    const cartItems = await CartItems.findAll({
      where: {
        cart_id: id
      },
    });
    console.log(cartItems);
    res.status(200).json(cartItems)
  } catch (error) {
    next(error)
  }
});
