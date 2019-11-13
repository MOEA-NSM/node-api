'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('estudo_perfil', [
      {
        descricao: 'DIRETOR',
        codigo: 'DIRETOR'
      },
      {
        descricao: 'GERENTE COMERCIAL',
        codigo: 'GERENTE_COMERCIAL'
      },
      {
        descricao: 'COORDENADOR',
        codigo: 'COORDENADOR'
      },
      {
        descricao: 'OPERADOR',
        codigo: 'OPERADOR'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('estudo_perfil', null, {});
  }
};
