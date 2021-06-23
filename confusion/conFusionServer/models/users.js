const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const user = new Schema({
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    admin:{
        type:Boolean,
        default:false
    }
});

user.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',user);