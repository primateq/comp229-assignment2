let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Contacts model
let BusinessContacts = require('../models/businesscontacts');
// NOT SURE WHERE THIS CAME FROM --> const businesscontacts = require('../models/businesscontacts');

//Get Route for Business Contact List page - READ OPERATION
router.get('/', async (req, res, next) =>{
    try {
        let businessContactsList = await BusinessContacts.find();
        //console.log(businessContactsList);

        res.render('businesscontacts/list', {title: 'Business Contacts', businessContactsList: businessContactsList})
    }
    catch (err) {
        console.log(err);
    }
});

// Get Route for displaying the Update page - UPDATE Operation
router.get('/update/:id', async (req, res, next) => {
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('businesscontacts/update', {title: 'Edit Business Contact', contact: contactToEdit});
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    });

// Post Route for processing the Update page - UPDATE Operation
router.post('/update/:id', async (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        "name" : req.body.name,
        "number" : req.body.number,
        "email" : req.body.email
    }

try {
    await Contact.updateOne({_id: id}, updatedContact);
    res.redirect('/business-contacts');
}
catch (err) {
    console.log(err);
    res.status(500).send(err);
}
});

// Get to perform Delete - DELETE Operation
router.get('/delete/:id', async (req, res, next) => {
    let id=req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/business-contacts')
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;