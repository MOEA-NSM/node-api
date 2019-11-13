import EstudoUsuario from  '../models/EstudoUsuario';
import EstudoFuncionalidade from  '../models/EstudoFuncionalidade';
import EstudoPerfil from  '../models/EstudoPerfil';

import DataBase from '../../database';

class UsuarioController {


    async salvar(req, res) {
      try {
            let { funcionalidades_id, ...data } = req.body; 

            let usuario = await EstudoUsuario.create(data);

            if (funcionalidades_id && funcionalidades_id.length > 0) { 
              usuario.setFuncionalidades(funcionalidades_id);
            }
            return res.status(200).json({ "mensagem": "sucesso" });
        } catch (error) {
          return res.status(500).json({ "mensagem": "erro " + error });
        }
    }

    async atualizar(req, res) {
      try {
            let { funcionalidades_id, ...data } = req.body; 

            await EstudoUsuario.update(data, {
              where : {id : req.params.id}
            }); 

            EstudoUsuario.findOne({
              where : { id : req.params.id }})
              .then(usuario => usuario.setFuncionalidades(funcionalidades_id));

            return res.status(200).json({ "mensagem": "sucesso" });
        } catch (error) {
          return res.status(500).json({ "mensagem": "erro " + error });
        }
    }

    async obterPorId(req, res) {
        let usuario = await EstudoUsuario.findOne({
          where: { id: req.params.id },
          include: [
              {
                  model: EstudoPerfil, 
                  as: 'perfil', 
              }, 
              {
                  model: EstudoFuncionalidade, 
                  as: 'funcionalidades',
                  through: {attributes: []}
              }
          ],
          });
        return res.json(usuario);
      }

      async obterTodos(req, res) {
        let usuarios = await EstudoUsuario.findAll({
          include: [
              {
                  model: EstudoPerfil, 
                  as: 'perfil', 
              }, 
              {
                  model: EstudoFuncionalidade, 
                  as: 'funcionalidades',
                  through: {attributes: []}
              }
          ],
          });
        return res.json(usuarios);
      }
}


export default new UsuarioController();
