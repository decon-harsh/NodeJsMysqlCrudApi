'use strict';

const Todo = require('../models/todo.model');
const User= require('../models/user.model');

exports.findAll = function (req, res) {
    Todo.findAll(function (err, user) {
        try {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', user);
            res.send(user);
        }
        catch {
            res.send("Something unusual happened!");
        }

    });
};

exports.create = function (req, res) {
    try {
        const new_todo = new Todo(req.body);
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required field' });
        }
        else {
            if (req.body['title'] && req.body['end'] && req.body['owner']) {
                User.findById(req.body['owner'], function (err, user) {
                    if (err)
                        res.send(err);
                    if(user.length!=0){
                        Todo.create(new_todo, function (err, todo) {
                            if (err)
                                res.send(err);
                            res.json({ error: false, message: "Task added successfully!", data: todo });
                        });                        
                    }
                    else{
                        res.json({message:"User Does Not Exists"});
                    }    
                });
            }
            else{
                res.json({message:"Check Body!"})
            }
        }
    }
    catch {
        res.send("Something unusual happened!");
    }

};
exports.findById = function (req, res) {
    try {
        Todo.findById(req.params.id, function (err, todo) {
            if (err)
                res.send(err);
            if(todo.length!=0)
            {
                res.json(todo);
            }
            else{
                res.json({message:"Task does not exists!"});
            }
        });
    }
    catch {
        res.send("Something unusual happened!");
    }
};
exports.update = function (req, res) {
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required field' });
        } else {
            if (req.body['title'] && req.body['end'] && req.body['owner']) {
                Todo.update(req.params.id, new Todo(req.body), function (err, todo) {
                    if (err)
                        res.send(err);
                    if(todo){
                        res.json({message: 'Task successfully updated', data: todo });
                    }
                    else{
                        res.json({message:"Task doesn't exists"});
                    }
                });
            }
            else{
                res.json({message:"No field can be empty"});
            }
        }
    }
    catch {
        res.send("Something unusual happened!");
    }
};
exports.delete = function (req, res) {
    try {
        Todo.delete(req.params.id, function (err, todo) {
            if (err)
                res.send(err);
            if(todo.length!=0){
                res.json({ error: false, message: 'Task successfully deleted' });
            }
            else{
                res.json({message:"Task Does Not Exists"});
            }           
        });
    }
    catch {
        res.send("Something unusual happened!");
    }
};