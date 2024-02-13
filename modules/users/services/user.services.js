// services/userService.js

const User = require('../../../models/user');
const UserDetails = require('../../../models/userDetails');
const UserSalary = require('../../../models/userSalary');

async function createUser(body) {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

async function getUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
}

async function getUserById(id) {
    try {
      const user = await User.findByPk(id, {
        include: [{
          model: UserDetails,
          include: UserSalary // Include the associated UserSalary model inside UserDetails
        }]
      });
      console.log("user", user); // Log the user object for inspection
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error('Error fetching user:', error); // Log the detailed error message
      throw new Error('Error fetching user');
    }
  }
  

async function updateUser(id, updates) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.update(updates);
    return user;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

// services/userService.js

async function deleteUser(id) {
    try {
        const user = await User.findByPk(id, {
            include: [{ model: UserDetails, as: 'Details' }, { model: UserSalary, as: 'Salary' }]
        });
        if (!user) throw new Error('User not found');

        // Destroy associated UserDetails and UserSalary
        await Promise.all([
            user.Details.destroy(),
            user.Salary.destroy()
        ]);

        // Then delete the user
        await user.destroy();

        return user;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Error deleting user');
    }
}

  

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
