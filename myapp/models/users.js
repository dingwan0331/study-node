const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    password : String,
    phoneNumber : String,
    email : String,
    create_at : { type: Date, default: Date.now  }
});
const User = mongoose.model('User', userSchema)

module.exports = {User};