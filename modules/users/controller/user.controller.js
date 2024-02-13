// controllers/userController.js

const userService = require('../services/user.services');

async function createUser(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
