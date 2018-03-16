module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    fullName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
  });

  //there are no assosiations yet so i commented this out

  Users.associate = function (models) {
    // We're saying that a Users should belong to an Author
    // A Users can't be created without an Author due to the foreign key constraint
    Users.belongsToMany(models.Interests, {
      foreignKey: 'userId',
      through: models.userInterests,        
      // allowNull: false
    });
  };

  return Users;
};