const users = require('../models/users');
// const {User} = require('../models/users')
const Except = require('../pkg/exceptions')
const dbHandler = require('../pkg/database/index')

module.exports = {
    signUp : (req, res) => {
            // try{
                // if(req.body){
                    // throw new Except('There is No Body')
                // }
            const data        = req.body
            const userName    = data.username
            const password    = data.password
            const email       = data.email
            const phoneNumber = data.email
            
            const userData = {
                name        : userName,
                password    : password,
                email       : email,
                phoneNumber : phoneNumber,
            }

            dbHandler(userData)

            res.status(201).json({msg: 'Good'})
            // res.status(201).json({message: 'create'})
            // }catch(error){
                // console.log(error.err)
                // res.status(error.status).json(error.msg)
            // }
        },
    }