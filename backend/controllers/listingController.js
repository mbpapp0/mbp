const { cloudinary } = require('../utils/cloudinary');
const Listing = require('../models/listingModel');

const getListings = async (req, res) => {
    const listings = await Listing.find();

    res.status(200).json(listings);
}

const getSingleListing = async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    res.status(200).json(listing);
}

const getListingsByCategory = async (req, res) => {
    const listings = await Listing.find({ category: req.params.id });

    res.status(200).json(listings);
}

const getListingsByUser = async (req, res) => {
    const listings = await Listing.find({ id: req.params.id });

    res.status(200).json(listings);
}
 
const createListing = async (req, res) => {
    try {
        const { id, title, description, price, category, fileStr } = req.body;

        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'ml_default'
        })

        const image = uploadedResponse.url;

        const newListing = await Listing.create({id, title, description, price, category, image});

        res.status(200).json(newListing);

    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

const deleteListing = async (req, res) => {
    const removedListing = await Listing.findByIdAndDelete(req.params.id);

    res.status(200).json(removedListing);
}

module.exports = {
    getListings,
    getSingleListing,
    getListingsByCategory,
    getListingsByUser,
    createListing,
    deleteListing
}