let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Contacts model
let BusinessContacts = require('../models/businesscontacts');
// NOT SURE WHERE THIS CAME FROM --> const businesscontacts = require('../models/businesscontacts');

//Get Route for Business Contact List page
router.get('/', async (req, res, next) =>{
    try {
        let businessContactsList = await BusinessContacts.find();
        //console.log(businessContactsList);

        res.render('businesscontacts', {title: 'Business Contacts List', businessContactsList: businessContactsList})
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;