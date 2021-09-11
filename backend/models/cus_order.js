'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cus_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cus_Order.init({
    orderId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    cusStatus: DataTypes.STRING,
    prescription: DataTypes.STRING,
    pharmacistStatus: DataTypes.STRING,
    nic: DataTypes.STRING,
    dPersonId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cus_Order',
  });
  return Cus_Order;
};