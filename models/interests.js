module.exports = function (sequelize, DataTypes) {
  var Interests = sequelize.define("Interests", {

    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }
  },
  {
    timestamps: false
  });
  Interests.associate = function(models) {
    // Associating Interests with many Events
    // When and Interest is deleted, also delete any associated Events (should rarely be deleted)
    Interests.belongsToMany(models.users, {
      foreignKey: 'interestsId',
      through: models.userInterests
    });
    Interests.hasMany(models.Event, {
    });
  };
  return Interests;
};