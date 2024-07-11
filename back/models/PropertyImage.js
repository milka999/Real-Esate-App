// models/propertyImage.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyImage extends Model {
    static associate(models) {
      // Define associations here
      PropertyImage.belongsTo(models.Property, {
        foreignKey: 'property_id',
        as: 'property'
      });
    }
  }
  PropertyImage.init({
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Properties', // table name
        key: 'id'
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PropertyImage',
  });
  return PropertyImage;
};
