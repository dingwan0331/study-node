const users     = require('../models/users');
// const {User} = require('../models/users')
const Except    = require('../pkg/exceptions')
const dbHandler = require('../pkg/database/index')
const jwt       = require('jsonwebtoken')

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

            dbHandler.createUser(userData)

            res.status(201).json({msg: 'Good'})
            // res.status(201).json({message: 'create'})
            // }catch(error){
                // console.log(error.err)
                // res.status(error.status).json(error.msg)
            // }
        },
    users : async (req, res)=>{
        const result = await dbHandler.getUser()
        res.status(200).json(result)
    },
    userDelete : async (req, res)=>{
        const id     = req.decoded._id
        const db_res = await dbHandler.userDelete(id)
        try{
            if (db_res.deletedCount <= 0){
                throw new Except('Already Deleted User')
            }
        }catch(err){
            res.status(err.status).json(err.msg)
        }
        res.status(204).json()
    }
}