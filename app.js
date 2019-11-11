const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //para acessar mesma origem do react
const app = express();
const port = 8000;
const sql = require('mssql');
const connStr = "Server=172.25.0.28;Database=TMOV_DEV;User Id=desenvolvedor;Password=Desenv@2019;";

//conecta banco de dados
sql.connect(connStr)
.then(conn => global.conn = conn)
.catch(err => console.log(err));

//configura o bodyParser para pegar POSTS mais tarde
app.use(bodyParser.json());
//para acessar mesma origem do react
app.use(cors());   

//configura a raiz da api
const router = express.Router();
router.get('/', (req, res) => res.json({ message : 'Funcionando!' }));
app.use('/', router);


function executarQuery(sql, res) {
	global.conn.request()
		.query(sql)
		.then(result => res.json(result.recordset))
		.catch(err => res.json(err));
}

//CONSULTA
router.get('/estudos/:id?', (req, res) => {
	let filter = '';
	if (req.params.id) {
		filter = ' WHERE ID = ' + parseInt(req.params.id);
	}
	executarQuery('SELECT * FROM estudo ' + filter, res);
});

//DELETE
router.delete('/estudos/:id', (req, res) => {
	executarQuery('DELETE estudo WHERE ID = ' + parseInt(req.params.id), res);
});

//INSERT
router.post('/estudos', (req, res) => {
	let id = parseInt(req.body.id);
	let nome = req.body.nome.substring(0, 150);
	let cpf = req.body.cpf.substring(0, 11);
	executarQuery(`INSERT INTO TMOV_DEV.dbo.estudo (ID, NOME, CPF) VALUES (${id}, '${nome}', '${cpf}')`, res);
});

//UPDATE
router.patch('/estudos/:id', (req, res) => {
	let id = parseInt(req.params.id);
	let nome = req.body.nome.substring(0, 150);
	let cpf = req.body.cpf.substring(0, 11);

	console.log(`UPDATE TMOV_DEV.dbo.estudo SET NOME='${nome}', CPF='${cpf}' WHERE ID = ${id}`);
	executarQuery(`UPDATE TMOV_DEV.dbo.estudo SET NOME='${nome}', CPF='${cpf}' WHERE ID = ${id}`, res);
});

app.get('/maps', function(req, res) {
  var dados = [
    {
      lat: -25.470991, 
      lon: -49.271036
    },
    {
      lat: -0.935586,
      lon: -49.635540
    },
    {
      lat: -2.485874, 
      lon: -43.128493
    }
  ];

  res.send(JSON.stringify(dados));
});

app.get('/posts', function(req, res) {
		var dados = [
		  {
			"postId": 1,
			"id": 1,
			"name": "id labore ex et quam laborum",
			"email": "Eliseo@gardner.biz",
			"body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
		  },
		  {
			"postId": 1,
			"id": 2,
			"name": "quo vero reiciendis velit similique earum",
			"email": "Jayne_Kuhic@sydney.com",
			"body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
		  },
		  {
			"postId": 1,
			"id": 3,
			"name": "odio adipisci rerum aut animi",
			"email": "Nikita@garfield.biz",
			"body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
		  }
								
		];
		res.send(JSON.stringify(dados));	
});	

app.listen(port, function() {
  console.log('Servidor rodando na porta 8000.');
});