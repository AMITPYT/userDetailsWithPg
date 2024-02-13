// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


// Create user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getUsers);

// Get user by ID
router.get('/users/:id', userController.getUserById);

// Update user
router.put('/users/:id', userController.updateUser);

// Delete user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
