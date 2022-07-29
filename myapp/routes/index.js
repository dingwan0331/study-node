const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('', function(req, res) {
  res.status(200).json({ message: 'hello' });
});

router.post('/123', (req, res)=>{
    const id       = req.body.id
    console.log(id)
    const password = req.body.password
    console.log(password)
    const email    = req.body.email
    console.log(email)
    email = '123'
    let arr        = [id,password,email]
    if (arr.join().length !== 3){
      res.status(400).json('메롱')
    }
    res.status(200).json('성공!!')
  }
)

const users = require('./users');
 
router.use('/users', users);

module.exports = router;