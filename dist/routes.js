"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _UsuarioController = require('./app/controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);

const routes = new (0, _express.Router)();

routes.get('/', (req, res) => {
    return res.json( { message : "Funcionando" } );
});

routes.get('/usuario', _UsuarioController2.default.index);

exports. default = routes;   