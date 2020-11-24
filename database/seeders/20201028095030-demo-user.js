'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { UUID, UUIDV4 } = Sequelize;
    console.log(Sequelize.DataTypes);
    await queryInterface.bulkInsert('users', [{
      id: UUIDV4,
      user_name: 'hsbtr',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
