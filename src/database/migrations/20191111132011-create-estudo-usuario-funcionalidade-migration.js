'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('estudo_usuario_funcionalidade', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      estudo_usuario_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        onDelete: 'CASCADE',
        references: {         // User hasMany WorkingDays n:n
          model: 'estudo_usuario',
          key: 'id'
        }
      },
      estudo_funcionalidade_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        onDelete: 'CASCADE',
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