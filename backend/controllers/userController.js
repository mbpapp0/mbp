const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});

    return token;
}


const signupUser = async(req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const user = await User.signup(first_name, last_name, email, password);
    const token = createToken(user._id);
        res.status(200).json({
            id: user._id,
            first_name,
            last_name,
            email,
            token
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        const first_name = user.first_name;
        const last_name = user.last_name;
        const id = user._id

        res.status(200).json({id, first_name, last_name, email, token});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    loginUser,
    signupUser,
}