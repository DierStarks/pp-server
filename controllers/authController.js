const mysql = require("mysql2");
const connection = require("../utils/connectDb");
function loginUser(request, response) {
  // console.log(request.body);
  const { email, password } = request.body;
  console.log(email);
  connection.query(
    // `select email, password from users where email = '${email}'--'`,
    `select email, password from users where email = '${email}'`,
    // "select email, password from users where email = 'testing@gmail.com'--''",
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).json({ error: "Failed to fetch data" });
        return;
      }
      console.log(results);
      response.json(results);
      // response.end();
    }
  );
}
// SELECT * FROM users WHERE username = ‘admin’--’ AND password = ‘foo’

  // SELECT * FROM users WHERE username = ‘’ OR 1=1--’ AND password = ‘foo’
module.exports = loginUser;
