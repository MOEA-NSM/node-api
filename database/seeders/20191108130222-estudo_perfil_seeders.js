'use strict';

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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('estudo_perfil', null, {});
  }
};
