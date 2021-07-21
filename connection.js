const mysql = require("mysql");
// changed connection to heliohost
let connection = mysql.createConnection({
  //host     : 'johnny.heliohost.org',
  //user     : 'bdady_tiger',
  //password : '!_cXj8£;',
  //database : 'bdady_db'
  
  host     : '127.0.0.1',
  user     : 'solar',
  password : 'usroot',
  database : 'accounts_system'
});

module.exports = connection;