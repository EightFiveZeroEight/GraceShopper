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
  try{
    const {id, count, user} = req.body
    console.log("**User**", user)
    const itemToAdd = await Product.findByPk(id)
    const cartToAddTo = await Cart.findByPk(user.id)
    res.status(200).json({itemToAdd, cartToAddTo})
    // console.log("**ItemToAdd***", itemToAdd)
    // let newItem = 0
    // while(newItem < count ){

    // }
    res.status(201).send("back-end route hit")
  } catch (err) {
    next(err)
  }
})
