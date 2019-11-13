"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _EstudoUsuario = require('../models/EstudoUsuario'); var _EstudoUsuario2 = _interopRequireDefault(_EstudoUsuario);

class UsuarioController {


    async index(req, res) {

        console.log('chegou aqui');
        const contratos =  _EstudoUsuario2.default.findAll();
        console.log('chegou novametne');

        return res.json(contratos);
    


        // EstudoUsuario.findAll({
        //     order: [['nome', 'DESC']]
        // })
        // .then(usuarios => res.json(usuarios));
        // return res.json(especies);
      }
    

    // async get(req, res) {
    //     EstudoUsuario.findAll({
    //         order: [['nome', 'DESC']]
    //     })
    //     .then(usuarios => res.json(usuarios));
    // }
}


exports. default = new UsuarioController();
