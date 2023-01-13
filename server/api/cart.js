
const router = require('express').Router()
const { models: { Cart }} = require('../db')
module.exports = router

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    res.status(200).json(cart)
  } catch (err) {
    next(err)
  }
});
