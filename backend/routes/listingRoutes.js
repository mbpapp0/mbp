const express = require('express');
const router = express.Router();
const {
        getListings,
        getSingleListing,
        getListingsByCategory,
        getListingsByUser,
        createListing,
        deleteListing
} = require('../controllers/listingController');

router.get('/', getListings);
router.get('/:id', getSingleListing);
router.get('/bycategory/:id', getListingsByCategory);
router.get('/byuser/:id', getListingsByUser);
router.post('/', createListing);
router.delete('/:id', deleteListing);

module.exports = router;