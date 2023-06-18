/*File name: comp229-assignment2
Student Name: Alessandra Primatesta
Student ID: 301.297.110
Date: June 18, 2023*/

let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next) => {
    res.render('index', { title: 'Home'});
}

module.exports.displayAboutPage = (req,res,next) => {
    res.render('about', { title: 'About Me'});
}

module.exports.displayProjectsPage = (req,res,next) => {
    res.render('projects', { title: 'Projects'});
}

module.exports.displayServicesPage = (req,res,next) => {
    res.render('services', { title: 'Services'});
}

module.exports.displayContactPage = (req,res,next) => {
    res.render('contact', { title: 'Contact'});
}
