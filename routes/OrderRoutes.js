var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function (req, res) {
    res.status(200).json({
        message : 'Order were fetched'
    });
});

router.post('/', function (req, res) {
    res.status(201).json({
        message : 'Order was created'
    });
});

router.get('/:orderId', function (req, res) {
    res.status(200).json({
        message : 'Order Details',
        orderId : req.params.orderId
    });
});

router.delete('/:orderId', function (req, res) {
    res.status(200).json({
        message : 'Order Deleted',
        orderId : req.params.orderId
    });
});



module.exports = router;