const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const port = 3000;
const authRouter = require("./controllers/authController");
const connection = require("./utils/connectDb");

app.use(express.json());
// app.use(cors());

app.use(authRouter);

connection.connect((err) => {
  if (err) {
    console.log("Error Connecting to database " + err);
    return;
  }
  console.log("connected to database");
});

app.listen(port, () => console.log(`Server is listening on Port ${port}`));
