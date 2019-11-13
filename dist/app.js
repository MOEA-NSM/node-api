"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors); //para acessar mesma origem do react
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );
        this.server.use(_bodyparser2.default.json());
        this.server.use(_cors2.default.call(void 0, ));  
        this.server.use(_routes2.default);
    }
}

exports. default = new App().server;