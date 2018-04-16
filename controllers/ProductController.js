const ProductModel = require('../models/ProductModel');
require('express-async-errors');
exports.create = async (req, res) => {

    const product = new ProductModel({
        name: req.body.name,
        price: req.body.price
    });
    try {
        await  product.save();
        res.status(201).json({
            message: 'product insert successfully',
            id: product._id,
            createdProduct: product
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }


};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    try {
        const product = await ProductModel.find({});
        if(product.length>0){
            res.status(200).json(product);
        }else{
            res.status(404).json({
                message:"no entries found"
            });
        }

    } catch (e) {
        res.status(500).json({
            error: err
        });
    }


};

// Find a single note with a noteId
exports.findOne = async (req, res) => {
    const id = req.params.productId;
    try {
        const product = await ProductModel.findById(id);
        if (product == null) {
            res.status(404).json({
                message: `no valid product found for this id: ${id}`,
            });
        } else {
            res.status(200).json({
                message: `Handling GET requests to /products ${id}`,
                product: product
            });
        }

    } catch (err) {
        res.status(500).json({
            error: err
        });
    }

};

// Update a note identified by the noteId in the request
exports.update = async (req, res) => {
    const id = req.params.productId;
    try {
        const  product = await ProductModel.update({_id:id},{$set:{name:req.body.name,price:req.body.price}});
        res.status(200).json(product);
    }catch (err) {
        res.status(500).json({
            error: err
        });
    }
    res.status(200).json({
        message: `Updated Product!`
    });
};

// Delete a note with the specified noteId in the request
exports.delete = async (req, res) => {
    const id = req.params.productId;
    try {
       const  product = await ProductModel.remove({_id:id});
        res.status(200).json(product);
    }catch (err) {
        res.status(500).json({
            error: err
        });
    }

};