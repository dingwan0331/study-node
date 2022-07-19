const express = require('express');
const router  = express.Router();

const userController = require('../controller/users')

router.post('/signup', userController.signUp)

router.get('', userController.users)

module.exports = router;