'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estudo_usuario_funcionalidade', {
      usuario_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'estudo_usuario',
          key: 'id'
        }
      },
      funcionalidade_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'estudo_funcionalidade',
          key: 'id'
        }
      } 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estudo_usuario_funcionalidade');
  }
};