'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nic: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      prescription: {
        type: Sequelize.STRING
      },
      ph_status: {
        type: Sequelize.STRING,
        defaultValue:"pending"
      },
      cus_status: {
        type: Sequelize.STRING,
        defaultValue:"waiting"
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
    await queryInterface.dropTable('Orders');
  }
};