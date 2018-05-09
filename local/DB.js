const mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'whiteliste'
});




module.exports = con;
