const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('', function(req, res) {
  res.status(200).json({ message: 'hello' });
});

router.post('/123', (req, res)=>{
    const id       = 1
    console.log(1)
    const password = 1
    console.log(2)
    const email    = 1
    let arr        = [id,password,email]
    console.log(arr.join().length)
    if (arr.join().length !== 3){
      console.log(123)
      res.status(400).json('메롱')
    }
    res.status(200).json('성공!!')
  }
)

const users = require('./users');
 
router.use('/users', users);

module.exports = router;