module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ImagePath: {
      type: DataTypes.STRING,
      allowNull: true 
    }
  });

  return Post;
};
