// controllers/userController.js

const userSalaryServices = require('../services/userSalary.services');

async function createUserSalary(req, res) {
  try {
    const { phoneNumber, dateOfBirth, address } = req.body;
    const userSalary = await userSalaryServices.createUserSalary(req.body);
    res.json(userSalary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserSalary(req, res) {
  try {
    const userSalary = await userSalaryServices.getUserSalary();
    res.json(userSalary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserSalaryById(req, res) {
  try {
    const userSalary = await userSalaryServices.getUserSalaryById(req.params.id);
    res.json(userSalary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUserSalary(req, res) {
  try {
    const userSalary = await userSalaryServices.updateUserSalary(req.params.id, req.body);
    res.json(userSalary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserSalary(req, res) {
  try {
    const userSalary = await userSalaryServices.deleteUserSalary(req.params.id);
    res.json(userSalary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createUserSalary, getUserSalary, getUserSalaryById, updateUserSalary, deleteUserSalary };
