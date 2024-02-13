// models/userDetails.js

const { Sequelize, DataTypes } = require('sequelize');
const User = require('./user');
const UserSalary = require('./userSalary');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/AllUserData');


const UserDetails = sequelize.define('UserDetails', {
  userSalaryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserSalary,
      key: 'id',
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
});

(async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

// Define association with User model
UserDetails.belongsTo(UserSalary, { foreignKey: 'userSalaryId' }); // UserDetails belongs to User

module.exports = UserDetails;
