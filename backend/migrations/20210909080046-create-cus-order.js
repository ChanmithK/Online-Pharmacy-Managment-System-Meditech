'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cus_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      cusStatus: {
        type: Sequelize.STRING
      },
      prescription: {
        type: Sequelize.STRING
      },
      pharmacistStatus: {
        type: Sequelize.STRING
      },
      nic: {
        type: Sequelize.STRING
      },
      dPersonId: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cus_Orders');
  }
};