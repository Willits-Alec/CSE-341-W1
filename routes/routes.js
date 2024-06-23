//routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => (
    res.send('Root page, This is the index page.')
));

// Get all users
// router.get('/users', userController.getUsers);

// GET a single user by ID
router.get('/users/:id', userController.getUserById);

// POST create a new user
router.post('/users', userController.createUser);

// PUT update a user by ID
router.put('/users/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;