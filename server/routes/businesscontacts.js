let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controllers/businesscontacts')

//helper fuction for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//Get Route for Business Contact List page - READ OPERATION
router.get('/', requireAuth, businessController.displayBusinessList);

// Get Route for displaying the Update page - UPDATE Operation
router.get('/update/:id', requireAuth, businessController.displayUpdatePage);

// Post Route for processing the Update page - UPDATE Operation
router.post('/update/:id', requireAuth, businessController.processUpdatePage);

// Get to perform Delete - DELETE Operation
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;