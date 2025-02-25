const mysql = require("mysql2");

// connecting to mysql server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Password1",
  database: "testing_users",
});

module.exports = connection;
