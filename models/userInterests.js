module.exports = function (sequelize, DataTypes) {
  var userInterests = sequelize.define("userInterests", {

    interestsId: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [1]
      // }
    },
    userId: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [1]
      // }
    }
  },
    {
      timestamps: false
    });
  return userInterests;
};