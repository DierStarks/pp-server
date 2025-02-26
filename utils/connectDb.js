const mysql = require("mysql2");

// connecting to mysql server
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Password1",
//   database: "testing_users",
// });

const connection = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7764741",
  password: "5gQPPFCqDe",
  database: "sql7764741",
   enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

module.exports = connection;
