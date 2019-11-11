module.exports = (sequelize, DataTypes) => {
    const EstudoFuncionalidade = sequelize.define('EstudoFuncionalidade', {
         descricao: DataTypes.STRING        
    }, 
    {
    //   schema: 'estudos',
      tableName: "estudo_funcionalidade"
    } 
    );

    EstudoFuncionalidade.associate = function(models) {
      EstudoFuncionalidade.belongsToMany(models.EstudoUsuario, 
      {
        through: 'estudo_usuario_funcionalidade', 
        foreignKey: 'funcionalidade_id', as: 'usuarios'
      })
  };

    return EstudoFuncionalidade;
  }

 