const router = require('express').Router();
const {
  models: { User, Cart },
} = require('../db');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    console.log("req", req.body)
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    console.log('some weird error ', err)
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const cart = await Cart.create({user_id:user.id});
    console.log(user);
    console.log(cart);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
