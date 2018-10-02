const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const autorize = require('../middleware/authorize');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", autorize, UserController.user_delete);

module.exports = router;
