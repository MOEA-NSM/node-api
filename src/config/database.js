module.exports = {
  username: 'desenvolvedor',
  password: 'Desenv@2019',
  database: 'TMOV_DEV',
  host: '172.25.0.28',
  dialect: 'mssql', 
  define: {    
    freezeTableName: true,
    underscored: true,
    paranoid: true,
    timestamps: false
  }
  
}

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
