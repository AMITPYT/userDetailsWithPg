// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userDetailsController = require('../controller/userDetails.controller');

// Create user
router.post('/userDetails', userDetailsController.createUserDetails);

// Get all users
router.get('/userDetails', userDetailsController.getUserDetails);

// Get user by ID
router.get('/userDetails/:id', userDetailsController.getUserDetailsById);

// Update user
router.put('/userDetails/:id', userDetailsController.updateUserDetails);

// Delete user
router.delete('/userDetails/:id', userDetailsController.deleteUserDetails);

module.exports = router;
