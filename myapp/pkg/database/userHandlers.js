const {User} = require('../../models/users')

module.exports = {
    createUser : (userData) => {
        const user = new User(userData)
        user.save();
    },
    getUser : () => {
        return User.find({})
    }
}