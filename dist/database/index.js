"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _EstudoUsuario = require('../app/models/EstudoUsuario'); var _EstudoUsuario2 = _interopRequireDefault(_EstudoUsuario);
var _EstudoFuncionalidade = require('../app/models/EstudoFuncionalidade'); var _EstudoFuncionalidade2 = _interopRequireDefault(_EstudoFuncionalidade);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [_EstudoUsuario2.default, _EstudoFuncionalidade2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models.map(model => model.init(this.connection));
  }
}

exports. default = new Database();
