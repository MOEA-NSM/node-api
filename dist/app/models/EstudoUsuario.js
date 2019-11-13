"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class EstudoUsuario extends _sequelize.Model {

  static init(sequelize) {
    super.init({
          id: {
            type: _sequelize2.default.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          nome: {
            type: _sequelize2.default.STRING,
            allowNull: false,
          },
          password: {
            type: _sequelize2.default.STRING,
            allowNull: false,
          }
      }, 
      { sequelize }
      // ,
      // {
      //   tableName: "estudo_usuario"
      // }
      );

    //   EstudoUsuario.associate = function(models) {
    //     EstudoUsuario.belongsTo(models.EstudoPerfil, 
    //     {
    //       foreignKey: 'estudo_perfil_id', as: 'perfil'
    //     }),

    //     EstudoUsuario.belongsToMany(models.EstudoFuncionalidade, 
    //     {
    //       through: 'estudo_usuario_funcionalidade', 
    //       foreignKey: 'usuario_id', as: 'funcionalidades'
    //     })
    // };
    return this;
  }
}

exports. default = EstudoUsuario;