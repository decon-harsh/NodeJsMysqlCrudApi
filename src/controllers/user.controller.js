'use strict';

const User= require('../models/user.model');

exports.findAll = function (req, res) {
    User.findAll(function (err, user) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create = function (req, res) {
    const new_user= new User(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }
    if(req.body['name']){
        User.create(new_user, function (err, user) {
            if (err)
                res.send(err);
            res.json({message: "User added successfully!", data: user});
        });
    }
    else{
        res.json({message:"Name field is empty!"});
    }
};
exports.findById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        if(user.length!=0){
            res.json(user);
        }
        else{
            res.json({message:"User Does Not Exists"});
        }    
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if(req.body['name']){
            User.update(req.params.id, new User(req.body), function (err, user) {
                if (err)
                    res.send(err);
                if(user){
                    res.json({message: 'User successfully updated', data: user });
                }
                else{
                    res.json({message:"User Does Not Exists"})
                }
            });
        }
        else{
            res.json({message:"Name cannot be empty"});
        }

    }
};
exports.delete = function (req, res) {
    User.delete(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        if (user){
            res.json({message: 'User successfully deleted' });
        }
        else{
            res.json({message:"Does Not Exist"})
        }    
    });
};