let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Contacts model
let BusinessContacts = require('../models/businesscontacts');
// NOT SURE WHERE THIS CAME FROM --> const businesscontacts = require('../models/businesscontacts');

let businessController = require('../controllers/businesscontacts')

//Get Route for Business Contact List page - READ OPERATION
router.get('/', businessController.displayBusinessList);

// Get Route for displaying the Update page - UPDATE Operation
router.get('/update/:id', businessController.displayUpdatePage);

// Post Route for processing the Update page - UPDATE Operation
router.post('/update/:id', businessController.processUpdatePage);

// Get to perform Delete - DELETE Operation
router.get('/delete/:id', businessController.performDelete);

module.exports = router;