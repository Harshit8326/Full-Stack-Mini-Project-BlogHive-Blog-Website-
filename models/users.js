
const bcrypt=require("bcryptjs");
module.exports = (sequelize, DataTypes) => {


    const User = sequelize.define('User', {
      Username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    User.beforeCreate(async (user, options) => {
      const salt = await bcrypt.genSalt(10);
      user.Password = await bcrypt.hash(user.Password, salt);
    });
    
    User.beforeUpdate(async (user, options) => {
      if (user.changed('Password')) {
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(user.Password, salt);
      }
    });
  
    return User;
  };
  