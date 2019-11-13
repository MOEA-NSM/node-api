const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //para acessar mesma origem do react
const app = express();
const port = 8000;
const { EstudoUsuario, EstudoUsuarioFuncionalidade, EstudoFuncionalidade, EstudoPerfil  } = require('./src/app/models');


//configura o bodyParser para pegar POSTS mais tarde
app.use(bodyParser.json());
//para acessar mesma origem do react
app.use(cors());   

const router = express.Router();
router.get('/', (req, res) => res.json({ message : 'Funcionando!' }));
app.use('/', router);

//Listar
router.get('/estudosUsuario', (req, res) => {

    EstudoUsuario.findAll({
        order: [['nome', 'DESC']]
    })
    .then(usuarios => res.json(usuarios));

});

// Criar
router.post('/estudosUsuario', (req, res) => {
    EstudoUsuario.create({ nome: 'Matheus', email: 'mateus2@rocketseat.com.br', password: '123456' });
    return res.json({"retorno":"OK"});
});

// Buscar
router.get('/estudosUsuario/:id', (req, res) => {
    EstudoUsuario.findOne(
        {where : { id : req.params.id }})
    .then(usuario => res.json(usuario));
});

// Editar
router.post('/estudosUsuario/:id', (req, res) => {
    try {
            EstudoUsuario.update(req.body, {
                where : {id : req.params.id}
            });       
            return res.status(200).json({"retorno":"OK"});    
    } catch (error) {
        res.status(500).json(error.message);
    }    
});

// Deletar
router.delete('/estudosUsuario/:id', (req, res) => {
    try {
        EstudoUsuario.destroy({
            where : {id : req.params.id}
        });       
        return res.status(204).json({"retorno":"Usuario excluido"});    
    } catch (error) {
        res.status(500).json(error.message);
    }       
});

// Criar
router.post('/estudosUsuarioFuncionalidade', (req, res) => {
    let funcionalidades_id = req.body.funcionalidades_id;
    if (req.body.usuario_id > 0) {
        EstudoUsuarioFuncionalidade.destroy({
            where : {usuarioId : req.body.usuario_id}
        });
        for(let i = 0; i < funcionalidades_id.length; i++) {
            EstudoUsuarioFuncionalidade.create({ 
                usuarioId: req.body.usuario_id, 
                funcionalidadeId: funcionalidades_id[i]
            });
        } 
    }
    return res.json({"retorno":"OK"});
});

//buscar
router.get('/estudosUsuarioFuncionalidade/:id', (req, res) => {
    EstudoUsuario.findAll({
        where : { id : req.params.id },
        include: [
            {
                model: EstudoPerfil, as: 'perfil'
            }, 
            {
                model: EstudoFuncionalidade, as: 'funcionalidades'
            }
        ],
        })
    .then(usuario => res.json(usuario));
});

router.post('/registro', async (req, res) => {
    const novoUsuario = await EstudoUsuario.create(req.body);
    res.json(novoUsuario);
});

app.listen(port, function() {
    console.log('Servidor rodando na porta 8000. Sequelize');
});