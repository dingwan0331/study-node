const {User}       = require('../../models/users')
const mongoose     = require('mongoose');
const InvalidError = require('../exceptions');

module.exports = {
    createUser : async (userData) => {
        try {
            const user = new User(userData)
            await user.save();

        }catch{throw new InvalidError('DB ERROR!!')}
    },
    getUser : () => {
        return User.find({})
    },
    userDelete : (id) =>{
        const u_id = mongoose.Types.ObjectId(id)
        User.deleteOne({ _id: u_id })
    }
}