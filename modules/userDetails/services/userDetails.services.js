// services/userService.js

const UserDetails = require('../../../models/userDetails');
const User = require('../../../models/user');

async function createUserDetails(body) {
  try {
    const userDetails = await UserDetails.create(body);
    console.log(userDetails); // Log userDetails if creation is successful
    return userDetails;
  } catch (error) {
    console.error(error); // Log the actual error message
    throw new Error('Error creating userDetails');
  }
}

async function getUserDetails() {
  try {
    const userDetails = await UserDetails.findAll();
    return userDetails;
  } catch (error) {
    throw new Error('Error fetching userDetails');
  }
}

async function getUserDetailsById(id) {
  try {
    const userDetails = await UserDetails.findByPk(id, {
      include: User // Include the associated User model
    });
    if (!userDetails) throw new Error('UserDetails not found');
    return userDetails;
  } catch (error) {
    throw new Error('Error fetching user details');
  }
}

async function updateUserDetails(id, updates) {
  try {
    const userDetails = await UserDetails.findByPk(id);
    if (!userDetails) throw new Error('UserDetails not found');
    await userDetails.update(updates);
    return userDetails;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

async function deleteUserDetails(id) {
  try {
    const userDetails = await UserDetails.findByPk(id);
    if (!userDetails) throw new Error('UserDetails not found');
    await userDetails.destroy();
    return userDetails;
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = { createUserDetails, getUserDetails, getUserDetailsById, updateUserDetails, deleteUserDetails };
