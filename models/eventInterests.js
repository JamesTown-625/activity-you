module.exports = function (sequelize, DataTypes) {
  var eventInterests = sequelize.define("eventInterests", {

    interestsId: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [1]
      // }
    },
    eventId: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [1]
      // }
    }
  },
    {
      timestamps: false
    });
  return eventInterests;
};