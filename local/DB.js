//connection database

const mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'Adloox'
});




module.exports = con;
