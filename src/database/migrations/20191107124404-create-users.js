module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('estudo_usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      estudo_perfil_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'estudo_perfil',
          key: 'id'
        }
      } 
    }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('estudo_usuario');
  }
};
