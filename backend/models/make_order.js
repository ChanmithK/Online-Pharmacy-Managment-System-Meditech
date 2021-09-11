'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Make_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Make_order.init({
    description: DataTypes.STRING,
    prescription: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Make_order',
  });
  return Make_order;
};