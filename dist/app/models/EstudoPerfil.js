"use strict";module.exports = (sequelize, DataTypes) => {
    const EstudoPerfil = sequelize.define('EstudoPerfil', {
        descricao: DataTypes.STRING,
        codigo: DataTypes.STRING,      
    }, 
    {
    //   schema: 'estudos',
      tableName: "estudo_perfil"
    } 
    );

    return EstudoPerfil;
  }

 