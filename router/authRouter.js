const express = require("express");
const router = express();
const loginUser = require("../controllers/authController");

router.post("/login", loginUser);

module.exports = router;
