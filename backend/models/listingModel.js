const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    category: {
        type: String,
        required: true 
    }, 
    tag: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('listing', listingSchema);