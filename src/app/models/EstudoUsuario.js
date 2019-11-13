import Sequelize, { Model, DataTypes } from 'sequelize';

class EstudoUsuario extends Model {
  static init(sequelize) {
    super.init({
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          }
      },       
      { 
        tableName: 'estudo_usuario',
        sequelize 
      } 
      );
    //return this;
  }


    static associate(models) { 
      this.belongsTo(models.EstudoPerfil,
      {
        foreignKey: 'estudo_perfil_id', as: 'perfil'
      })

      this.belongsToMany(models.EstudoFuncionalidade, 
      {
        through: 'estudo_usuario_funcionalidade', 
        foreignKey: 'estudo_usuario_id', 
        as: 'funcionalidades',
      })
    };


}

export default EstudoUsuario;