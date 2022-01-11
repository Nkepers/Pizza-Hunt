const router = require('express').Router();
const pizzaRoute = require('./pizza-route');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoute);

module.exports = router;