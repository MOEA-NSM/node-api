"use strict";'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('estudo_funcionalidade', [
      {
        descricao: 'CADASTRAR_CLIENTE'
      },
      {
        descricao: 'CADASTRAR_NOTA_FISCAL'
      },
      {
        descricao: 'VISUALIZAR_LOTES'
      },
      {
        descricao: 'DEMITIR_FUNCIONARIO'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('estudo_funcionalidade', null, {});
  }
};
