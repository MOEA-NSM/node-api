module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('estudo_perfil', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      codigo: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      }
     },     
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('estudo_perfil');
  }
};