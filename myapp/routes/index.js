const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('', function(req, res) {
  res.status(200).json({ message: 'hello' });
});

const users = require('./users');
 
router.use('/users', users);

module.exports = router;