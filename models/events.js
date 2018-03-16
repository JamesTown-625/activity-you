module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {

    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    image: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

   date: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    address: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    city: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    state: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

    zipcode: {
      type: DataTypes.INTEGER
    },
    
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },

  },
  
    {
      timestamps: false
    });
  Event.associate = function (models) {
    // Associating Event with many Events
    // When and Interest is deleted, also delete any associated Events (should rarely be deleted)
    Event.belongsTo(models.Interests, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Event;
};