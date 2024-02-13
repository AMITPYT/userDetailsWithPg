// models/user.js

const { Sequelize, DataTypes } = require('sequelize');
const UserSalary = require('./userSalary');
const UserDetails = require('./userDetails');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/AllUserData');


const User = sequelize.define('User', {
    userDetailsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: UserDetails,
          key: 'id',
        },
    },
    userSalaryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: UserSalary,
          key: 'id',
        },
    },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
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
User.belongsTo(UserSalary, { foreignKey: 'userSalaryId' });
User.belongsTo(UserDetails, { foreignKey: 'userDetailsId' });


module.exports = User;
