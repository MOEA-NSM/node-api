import EstudoFuncionalidade from  '../models/EstudoFuncionalidade';

import DataBase from '../../database';

class FuncionalidadeController {


  async salvar(req, res) {
    try {
        let { descricao } = req.body; 
        await EstudoFuncionalidade.create(descricao);
        return res.status(200).json({ "mensagem": "sucesso" });
      } catch (error) {
        return res.status(500).json({ "mensagem": "erro " + error });
      }
  }

  async atualizar(req, res) {
    try {
          let { descricao } = req.body; 

          console.log(descricao);

          await EstudoFuncionalidade.update({"descricao" : descricao }, {
            where : {id : req.params.id}
          }); 
          
          return res.status(200).json({ "mensagem": "sucesso" });
      } catch (error) {
        return res.status(500).json({ "mensagem": "erro " + error });
      }
  }

  async obterPorId(req, res) {
    let funcionalidade = await EstudoFuncionalidade.findOne({
          where: { id: req.params.id }
      });
    return res.json(funcionalidade);
  }

  async obterTodos(req, res) {
    let funcionalidades = await EstudoFuncionalidade.findAll();
    return res.json(funcionalidades);
  }
}

export default new FuncionalidadeController();
