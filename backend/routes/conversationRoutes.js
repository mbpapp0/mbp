const express = require('express');
const router = express.Router();
const {
    createConversations,
    getConversations
} = require('../controllers/conversationController');

router.get('/:id', getConversations)
router.post('/', createConversations) 

module.exports = router;