// models/userDetails.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/AllUserData'); // Import User model

const UserSalary = sequelize.define('UserSalary', {
  Salary: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for phone number
  },
  AnnualSalary: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for date of birth
  },
},
 {
    timestamps: true,
  },
  );
  (async () => {
    try {
      await sequelize.sync();
      console.log('Database synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  })();

// Define association with User mode
module.exports = UserSalary;





