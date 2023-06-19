/*File name: comp229-assignment2
Student Name: Alessandra Primatesta
Student ID: 301.297.110
Date: June 18, 2023*/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema (
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            require: 'Username is required.'
        },
        email:
        {
            type: String,
            default: "",
            trim: true,
            require: 'Email Address is required.'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'users'
    }
);

//configure options for User Model
let options = ({missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);