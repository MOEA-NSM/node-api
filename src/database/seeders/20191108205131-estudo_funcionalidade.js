'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
   return queryInterface.bulkDelete('estudo_funcionalidade', null, {});
  }
};
