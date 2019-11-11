'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstudoUsuarioFuncionalidade = sequelize.define('EstudoUsuarioFuncionalidade', {
    usuarioId: DataTypes.INTEGER,
    funcionalidadeId: DataTypes.INTEGER

  }, 
  {
    //schema: 'estudos',
    tableName: "estudo_usuario_funcionalidade"
  });
  
  EstudoUsuarioFuncionalidade.associate = function(models) {
    EstudoUsuarioFuncionalidade.belongsTo(models.EstudoUsuario, {foreignKey: 'usuarioId'});
    EstudoUsuarioFuncionalidade.belongsTo(models.EstudoFuncionalidade, {foreignKey: 'funcionalidadeId'});

  };
  return EstudoUsuarioFuncionalidade;
};