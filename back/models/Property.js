// models/property.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      // Define association here
      Property.belongsTo(models.User, {
        foreignKey: 'agent_id',
        as: 'agent'
      });
      Property.hasMany(models.PropertyImage, {
        foreignKey: 'property_id',
        as: 'images'
      });
      Property.hasMany(models.Inquiry, {
        foreignKey: 'property_id',
        as: 'inquiries'
      });
    }
  }
  Property.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // table name
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
