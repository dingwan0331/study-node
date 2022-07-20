const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type     : String,
        required : true
    },
    password : {
        type     : String,
        required : true
    },
    phoneNumber : {
        type     : String,
        required : true
    },
    email : {
        type : String
    },
    status : {
        type    : Number,
        default : 1
    },
    create_at : { type: Date, default: Date.now  }
});
const User = mongoose.model('User', userSchema)

module.exports = {User};