'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Moderateur',
      lastName: '',
      email: 'moderateur@groupomania.com',
      password: '$2b$10$yecna/ZmH.5xO8Q6cXKpn.zFSUZee6rwL4mS8/uJ1yYPpwMSuRts2',
      isAdmin: true
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};