"use strict";'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estudo_usuario', [
      {
        nome: 'Jonny Deepy',
        email: "jonny@gmail.com",
        password: "12345656",
        estudo_perfil_id: 1
      },
      {
        nome: 'Maria silva',
        email: "maria@gmail.com",
        password: "12345656",
        estudo_perfil_id: 2
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estudo_perfil', null, {});
  }
};
