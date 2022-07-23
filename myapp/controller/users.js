const users      = require('../models/users')
const dbHandler  = require('../pkg/database/index')
const InvalidError = require('../pkg/exceptions')

module.exports = {
    signUp : async (req, res) => {
            try{
                console.log(1)
                if(Object.keys(req.body).length===0){
                    console.log(2)
                    throw new InvalidError('There is No body')
                }
            const data     = req.body
            console.log(data)
            const userData = {
                name        : data.name,
                password    : data.password,
                email       : data.email,
                phoneNumber : data.email
            }
            console.log(userData)
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
    }
}
