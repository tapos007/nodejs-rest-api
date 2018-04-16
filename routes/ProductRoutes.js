var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');


// define the home page route
router.get('/', ProductController.findAll);

router.post('/', ProductController.create);

router.get('/:productId', ProductController.findOne);

router.patch('/:productId', ProductController.update);

router.delete('/:productId', ProductController.delete);

module.exports = router;