const express         = require('express');
const router          = express.Router();
const token_validator = require('../lib/tokenValidator')

const userController = require('../controller/users')

router.post('/signup', userController.signUp)

// 토큰발급용 임시코드 
router.post('/signin', 
    (req,res) =>{
        const jwt   = require('jsonwebtoken')
        const token = jwt.sign({_id:''},process.env.JWT_SECERET, {
            expiresIn : '1d',
            issuer    : 'localhost',
            subject   : 'user_info'
          })
        res.status(200).json(token)
    }
)
router.get('', userController.users)

router.delete('/delete', token_validator, userController.userDelete)

module.exports = router;