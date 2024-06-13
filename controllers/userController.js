//UserController.js

const User = require('../models/userModel');

// Method to get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users from the database
        res.status(200).json(users);      // Send the users in the response
    } catch (error) {
        res.status(500).send(error);      // Send an error response if something goes wrong
    }
};