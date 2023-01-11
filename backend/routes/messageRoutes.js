const express = require('express');
const router = express.Router();
const { 
    getMessages, 
    createMessages
} = require('../controllers/messageController');

router.get('/:conversationId', getMessages);
router.post('/', createMessages)



module.exports = router;