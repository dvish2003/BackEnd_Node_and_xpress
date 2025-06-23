const express = require('express');
const router = express.Router();
const {register, login, get} = require('../controller/UserController')
const authenticate = require('../middleware/authenticate')
router.post('/register',register)
router.post('/login',login)


module.exports = router;