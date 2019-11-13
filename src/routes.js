import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import FuncionalidadeController from './app/controllers/FuncionalidadeController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json( { message : "Funcionando" } );
});

//usuario
routes.post('/usuario', UsuarioController.salvar);
routes.post('/usuario/:id', UsuarioController.atualizar);
routes.get('/usuario', UsuarioController.obterTodos);
routes.get('/usuario/:id', UsuarioController.obterPorId);

//funcionalidade
routes.post('/funcionalidade', FuncionalidadeController.salvar);
routes.post('/funcionalidade/:id', FuncionalidadeController.atualizar);
routes.get('/funcionalidade', FuncionalidadeController.obterTodos);
routes.get('/funcionalidade/:id', FuncionalidadeController.obterPorId);



export default routes;   