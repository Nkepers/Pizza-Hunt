const router = require('express').Router();
const commentRoute = require('./comment-route');
const pizzaRoute = require('./pizza-route');

router.use('/comments', commentRoute);
router.use('/pizzas', pizzaRoute);

module.exports = router;