const Conversation = require('../models/conversationModel')

const createConversations = async (req, res) => {
    try {
        
        const conversation = await Conversation.find({ members: [req.body.senderId, req.body.receiverId]});

        if(conversation.length > 0) {
            res.send(true)
            return;
        }

        const newConversation = await Conversation.create({
            members: [req.body.senderId, req.body.receiverId]
        });
    
        res.status(200).json(newConversation);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message});
    }
}

const getConversations = async (req, res) => {

    const conversation = await Conversation.find({
        members: { $in: [req.params.id] },
    }).sort({ createdAt: -1});

    res.json(conversation)
}

module.exports = {
    createConversations,
    getConversations
}