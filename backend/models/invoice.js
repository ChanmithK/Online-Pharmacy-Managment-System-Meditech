'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Invoice.init({
    invoice_id: DataTypes.INTEGER,
    nic: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    del_person_id: DataTypes.INTEGER,
    manager_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    deliverty_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};