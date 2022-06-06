import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProdcutSchema = new Schema({
    product_name: {
        type: String,
    },
    desc: {
        type: String
    },
    value: {
        type: Number
    },
    product_type: {
        type: String
    },
    tags: [{
        type: String,
    }],
    
    created_date: {
        type: Date,
        default: Date.now
    }
})