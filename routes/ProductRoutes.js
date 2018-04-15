var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function (req, res) {
    res.status(200).json({
        message : 'Handling GET requests to /products'
    });
});

router.post('/', function (req, res) {
    const product = {
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json({
        message : 'Handling POST requests to /products',
        createdProduct:product
    });
});

router.get('/:productId', function (req, res) {
    const id = req.params.productId;
    res.status(200).json({
        message : `Handling GET requests to /products ${id}`
    });
});

router.patch('/:productId', function (req, res) {
    const id = req.params.productId;
    res.status(200).json({
        message : `Updated Product!`
    });
});

router.delete('/:productId', function (req, res) {
    const id = req.params.productId;
    res.status(200).json({
        message : `Delete Product!`
    });
});

module.exports = router;