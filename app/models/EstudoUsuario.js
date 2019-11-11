module.exports = (sequelize, DataTypes) => {
    const EstudoUsuario = sequelize.define('EstudoUsuario', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      estudoPerfilId: DataTypes.INTEGER
      }, 
      {
        //schema: 'estudos',
        tableName: "estudo_usuario"
      });

      EstudoUsuario.associate = function(models) {
        EstudoUsuario.belongsTo(models.EstudoPerfil, 
        {
          foreignKey: 'estudo_perfil_id', as: 'perfil'
        }),

        EstudoUsuario.belongsToMany(models.EstudoFuncionalidade, 
        {
          through: 'estudo_usuario_funcionalidade', 
          foreignKey: 'usuario_id', as: 'funcionalidades'
        })
    };

    return EstudoUsuario;
  }

   