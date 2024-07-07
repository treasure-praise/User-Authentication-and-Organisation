const express = require("express");
const { Register, Login, getUser } = require("../controllers/Auth.Controller");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/api/users/:id", getUser);

module.exports = router;
