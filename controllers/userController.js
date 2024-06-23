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


// Method to get a single user by ID
exports.getUserById = async (req, res) => {
    //#swagger.tags=['Users']
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Method to create a new user
exports.createUser = async (req, res) => {
    //#swagger.tags=['Users']
    try {
        const { fname, lname, Email, color, bday } = req.body;
        const newUser = new User({ fname, lname, Email, color, bday });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Method to update a user by ID
exports.updateUser = async (req, res) => {
    //#swagger.tags=['Users']
    try {
        const userId = req.params.id;
        const { fname, lname, Email, color, bday } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { fname, lname, Email, color, bday }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Method to delete a user by ID
exports.deleteUser = async (req, res) => {
    //#swagger.tags=['Users']
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};