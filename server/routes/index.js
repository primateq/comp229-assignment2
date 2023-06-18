/*File name: comp229-assignment2
Student Name: Alessandra Primatesta
Student ID: 301.297.110
Date: June 18, 2023*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
