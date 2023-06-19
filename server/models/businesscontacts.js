/*File name: comp229-assignment2
Student Name: Alessandra Primatesta
Student ID: 301.297.110
Date: June 18, 2023*/

let mongoose = require('mongoose');

//create a model class
let businessContactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'contact'
});

module.exports = mongoose.model('Contacts', businessContactsModel);