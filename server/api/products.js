const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

//all products
router.get('/', async (req, res, next) => {
  try{
    const products = await Product.findAll()
    res.status(200).json(products)
  } catch (err) {
    next(err)
  }
})

//single product route
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    next(err)
  }
})
