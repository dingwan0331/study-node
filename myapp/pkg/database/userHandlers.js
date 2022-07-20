const {User} = require('../../models/users')
const mongoose = require('mongoose')

module.exports = {
    createUser : (userData) => {
        const user = new User(userData)
        user.save();
    },
    getUser : () => {
        return User.find({})
    },
    userDelete : (id) =>{
        const u_id = mongoose.Types.ObjectId(id)
        User.deleteOne({ _id: u_id })
    }
}