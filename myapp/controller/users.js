const users      = require('../models/users')
const dbHandler  = require('../pkg/database/index')
const InvalidError = require('../pkg/exceptions')

module.exports = {
    signUp : async (req, res) => {
            try{
                if(Object.keys(req.body).length===0){
                    throw new InvalidError('There is No body')
                }
            const data     = req.body
            const userData = {
                name        : data.name,
                password    : data.password,
                email       : data.email,
                phoneNumber : data.email
            }

            await dbHandler.createUser(userData)

            res.status(201).json({msg: 'Good'})}catch(err){
                res.status(err.status).json(err.msg)
            }
        },
    users : async (req, res)=>{
        const result = await dbHandler.getUser()

        res.status(200).json(result)
    },
    userDelete : async (req, res)=>{
        const id = req.decoded._id

        await dbHandler.userDelete(id)
        
        res.status(204).end()
    },
    userUpdate : async (req, res) => {
        try{
            const _id    = req.decoded._id
            const user   = req.body
            const DB_key = ['name', 'password', 'email','phoneNumber']
            let userData = {}

            for (key in user){
                if(DB_key.includes(key)){
                userData[key] = user[key]
                }
            }
            
            if(Object.keys(userData).length ===0){
                throw new InvalidError('Invalid userData')
            }

            res.status(200).json({msg : 'Done'})

            await dbHandler.updateUser(_id, userData)
        }catch(err){res.status(err.status).json(err.msg)}
        }
    }
