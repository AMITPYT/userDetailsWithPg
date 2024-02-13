// controllers/userController.js

const userDetailsServices = require('../services/userDetails.services');

async function createUserDetails(req, res) {
  try {
    const { phoneNumber, dateOfBirth, address } = req.body;
    const userDetails = await userDetailsServices.createUserDetails(req.body);
    res.json(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserDetails(req, res) {
  try {
    const userDetails = await userDetailsServices.getUserDetails();
    res.json(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUserDetailsById(req, res) {
  try {
    const userDetails = await userDetailsServices.getUserDetailsById(req.params.id);
    res.json(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUserDetails(req, res) {
  try {
    const userDetails = await userDetailsServices.updateUserDetails(req.params.id, req.body);
    res.json(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserDetails(req, res) {
  try {
    const userDetails = await userDetailsServices.deleteUserDetails(req.params.id);
    res.json(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createUserDetails, getUserDetails, getUserDetailsById, updateUserDetails, deleteUserDetails };
