let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Contacts model
let BusinessContacts = require('../models/businesscontacts');

module.exports.displayBusinessList = async (req, res, next) =>{
    try {
        let businessContactsList = await BusinessContacts.find();
        //console.log(businessContactsList);

        res.render('businesscontacts/list', {title: 'Business Contacts', businessContactsList: businessContactsList})
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.displayUpdatePage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let contactToEdit = await BusinessContacts.findById(id);
        res.render('businesscontacts/update', {title: 'Edit Business Contact', contact: contactToEdit});
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    };

module.exports.processUpdatePage = async (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        "name" : req.body.name,
        "number" : req.body.number,
        "email" : req.body.email
    }

try {
    await BusinessContacts.updateOne({_id: id}, updatedContact);
    res.redirect('/business-contacts');
}
catch (err) {
    console.log(err);
    res.status(500).send(err);
}
};

module.exports.performDelete = async (req, res, next) => {
    let id=req.params.id;

    try {
        await BusinessContacts.findByIdAndRemove(id);
        res.redirect('/business-contacts')
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};