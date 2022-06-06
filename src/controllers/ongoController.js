import mongoose from "mongoose";
import { ProdcutSchema } from '../ongoModels/ongoModel';

const Product = mongoose.model('Product', ProdcutSchema);

export const addNewProduct = ( req, res ) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    })
}

export const getProducts = ( req, res ) => {

    Product.find({}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    })
}

export const getProductbyId = ( req, res ) => {

    Product.findById(req.params.productID, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    })
}

export const updateProduct = ( req, res ) => {

    Product.findOneAndUpdate({_id: req.params.productID}, req.body, { new: true, useFindAndModify: false}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    })
}

export const deleteProduct = ( req, res ) => {

    Product.deleteOne({_id: req.params.productID}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted product'});
    })
}