'use strict';
var dbConn = require('./../../config/db.config');

var Todo = function (Todo) {
    this.title = Todo.title;
    this.end = Todo.end;
    this.owner = Todo.owner;
    this.created_at = new Date();
    this.updated_at = new Date();
};


Todo.create = function (newTodo, result) {
    dbConn.query("INSERT INTO todo set ?", [newTodo], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Todo.findById = function (id, result) {
    dbConn.query("Select * from todo where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Todo.findAll = function (result) {
    dbConn.query("Select * from todo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Todos : ', res);
            result(null, res);
        }
    });
};

Todo.update = function (id, Todo, result) {
    dbConn.query("UPDATE todo SET title=?,end=?,owner=? WHERE id = ?", [Todo.title,Todo.end,Todo.owner, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, err);
        }
    });
};

Todo.delete = function (id, result) {
    dbConn.query("SELECT * FROM todo WHERE id=?",[id],function(err,res){
        if(res.length!=0){
            dbConn.query("DELETE FROM todo WHERE id = ?", [id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
            });
        }
        else{
            result(null,res);
        }
    });
};

module.exports = Todo;