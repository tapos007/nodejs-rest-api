const ProductModel = require('../models/ProductModel');
exports.create = (req, res) => {
    const product = {
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json({
        message : 'Handling POST requests to /products',
        createdProduct:product
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    res.status(200).json({
        message : 'Handling GET requests to /products'
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    const id = req.params.productId;
    res.status(200).json({
        message : `Handling GET requests to /products ${id}`
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    const id = req.params.productId;
    res.status(200).json({
        message : `Updated Product!`
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    const id = req.params.productId;
    res.status(200).json({
        message : `Delete Product!`
    });
};