// services/userService.js

const UserDetails = require('../../../models/userDetails');
const User = require('../../../models/user');
const UserSalary = require('../../../models/userSalary');

async function createUserSalary(body) {
  try {
    const userSalary = await UserSalary.create(body);
    console.log(userSalary); // Log userDetails if creation is successful
    return userSalary;
  } catch (error) {
    console.error(error); // Log the actual error message
    throw new Error('Error creating userSalary');
  }
}

async function getUserSalary() {
  try {
    const userSalary = await UserSalary.findAll();
    return userSalary;
  } catch (error) {
    throw new Error('Error fetching UserSalary');
  }
}

async function getUserSalaryById(id) {
  try {
    const userSalary = await UserSalary.findByPk(id, {
      include: [{
        model: UserDetails,
        include: User // Include the associated User model inside UserDetails
      }]
    });
    if (!userSalary) throw new Error('UserSalary not found');
    return userSalary;
  } catch (error) {
    throw new Error('Error fetching user details');
  }
}

async function updateUserSalary(id, updates) {
  try {
    const userSalary = await UserSalary.findByPk(id);
    if (!userSalary) throw new Error('userSalary not found');
    await userSalary.update(updates);
    return userSalary;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

async function deleteUserSalary(id) {
  try {
    const userSalary = await UserSalary.findByPk(id);
    if (!userSalary) throw new Error('userSalary not found');
    await userSalary.destroy();
    return userSalary;
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = { createUserSalary, getUserSalary, getUserSalaryById, updateUserSalary, deleteUserSalary };
