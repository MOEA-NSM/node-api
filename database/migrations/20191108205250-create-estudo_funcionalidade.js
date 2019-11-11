module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('estudo_funcionalidade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      } 
     },     
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('estudo_funcionalidade');
  }
};