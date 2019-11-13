import Sequelize from 'sequelize';

import EstudoUsuario from '../app/models/EstudoUsuario';
 import EstudoFuncionalidade from '../app/models/EstudoFuncionalidade';
 import EstudoPerfil from '../app/models/EstudoPerfil';

import databaseConfig from '../config/database';

const models = [EstudoUsuario, EstudoFuncionalidade, EstudoPerfil];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init && model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
