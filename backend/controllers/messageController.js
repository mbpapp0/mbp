const Message = require('../models/messageModel');

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        });

        res.status(200).json(messages);
        
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createMessages = async (req, res) => {
    try{

        const newMessage = await Message.create(req.body);
    
        res.status(200).json(newMessage);
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getMessages,
    createMessages
}