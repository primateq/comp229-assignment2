/*File name: comp229-assignment2
Student Name: Alessandra Primatesta
Student ID: 301.297.110
Date: June 18, 2023*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; //alias

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

module.exports.displayLoginPage = (req,res,next) => {
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            userName: req.user ? req.user.userName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err, user, info) => {
        //server err?
        if(err)
        {
            return next(err);
        }
        //is there a user login err?
        if(!user){
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
        }
        req.login(user,(err) => {
            //server err?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/business-contacts');
        });
    })(req,res,next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout((err) => {
        if (err)
        {
            //handle error here
            console.log(err);
            return next(err);
        }
        return res.redirect('/');
    });
}