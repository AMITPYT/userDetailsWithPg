// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userSalaryController = require('../controller/userSalary.controller');

// Create user
router.post('/userSalary', userSalaryController.createUserSalary);

// Get all users
router.get('/userSalary', userSalaryController.getUserSalary);

// Get user by ID
router.get('/userSalary/:id', userSalaryController.getUserSalaryById);

// Update user
router.put('/userSalary/:id', userSalaryController.updateUserSalary);

// Delete user
router.delete('/userSalary/:id', userSalaryController.deleteUserSalary);

module.exports = router;
