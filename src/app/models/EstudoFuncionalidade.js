import Sequelize, { Model, DataTypes } from 'sequelize';

class EstudoFuncionalidade extends Model {
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
        tableName: 'estudo_funcionalidade',
        sequelize 
      } 
      );
    return this;
  }

  static associate(models) { 
    this.belongsToMany(models.EstudoUsuario, 
    {
      through: 'estudo_usuario_funcionalidade', 
      foreignKey: 'estudo_funcionalidade_id', 
      as: 'usuarios',
    })
  };


}

export default EstudoFuncionalidade;