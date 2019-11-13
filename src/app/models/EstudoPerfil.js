import Sequelize, { Model, DataTypes } from 'sequelize';

class EstudoPerfil extends Model {
  static init(sequelize) {
    super.init({
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          descricao: {
            type: DataTypes.STRING,
            allowNull: false,
          } 
      },       
      { 
        tableName: 'estudo_perfil',
        sequelize 
      } 
      );
    return this;
  }
}

export default EstudoPerfil;