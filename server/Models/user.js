const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: [true, 'Should be filled'],
        unique: true
    }
})

//this plugin adds fields, methods, and functionalities required for local authentication using Passport.
UserSchema.plugin(passportLocalMongoose);   

module.exports = mongoose.model('User' , UserSchema);