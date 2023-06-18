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