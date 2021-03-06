const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const authorize = require('../middleware/authorize');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", authorize, UserController.user_delete);

module.exports = router;
