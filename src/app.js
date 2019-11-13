import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'; //para acessar mesma origem do react
import routes from './routes';
import './database'; 

class App {
    constructor() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.use(cors());  
        this.server.use(routes);
    }
}

export default new App().server;