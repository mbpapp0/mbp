const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    carBrand: {
        type: String
    },
    carModel: {
        type: String
    },
    year: {
        type: Number
    },
    milage: {
        type: Number
    },
    fuel: {
        type: String
    },
    transmisson: {
        type: String
    },
    description: {
        type: String
    },
    motorCycleBrand: {
        type: String
    },
    truckBrand: {
        type: String
    },
    salary: {
        type: Number
    },
    positonType: {
        type: String
    },
    bedRooms: {
        type: Number
    },
    bathRooms: {
        type: Number
    },
    propertyType: {
        type: String
    },
    furnishing: {
        type: String
    },
    listedBy: {
        type: String
    },
    parking: {
        type: Number
    },
    plotArea: {
        type: Number
    },
    length: {
        type: Number
    },
    breadth: {
        type: Number
    },
    bikeBrand: {
        type: String
    },
    autoPart: {
        type: String
    },
    computerBrand: {
        type: String
    },
    phoneBrand: {
        type: String
    },
    cameraBrand: {
        type: String
    }, 
    tvBrand: {
        type: String
    }
}, { timestamps: true});

module.exports = mongoose.model('listing', listingSchema);