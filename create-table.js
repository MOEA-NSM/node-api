const connStr = "Server=172.25.0.28;Database=TMOV_DEV;User Id=desenvolvedor;Password=Desenv@2019;";
const sql = require("mssql");


function createTable(conn){

    const table = new sql.Table('estudo');
    table.create = true;
    table.columns.add('ID', sql.Int, {nullable: false, primary: true});
    table.columns.add('Nome', sql.NVarChar(150), {nullable: false});
    table.columns.add('CPF', sql.NChar(11), {nullable: false});
    table.rows.add(1, 'teste1', '12345678901');
    table.rows.add(2, 'teste2', '09876543210');
    table.rows.add(3, 'teste3', '12312312399');

    const request = new sql.Request()
    request.bulk(table)
           .then(result => console.log('funcionou'))
           .catch(err => console.log('erro no bulk. ' + err));
}

sql.connect(connStr)
    .then(conn => createTable(conn))
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));