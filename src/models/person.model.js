'use strict';
var dbConn = require('../../config/db.config');

var User = function (user) {
    this.name = user.name;
    this.age = user.age;
    this.gender = user.gender;
    this.mobileNumber = user.mobileNumber;
};


User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", [newUser], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};

User.findById = function (id, result) {
    dbConn.query("Select * from users where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.update = function (id, user, result) {
    dbConn.query("SELECT * FROM users WHERE id=?",[id],function(err,res){
        if(res.length!=0){
            dbConn.query("UPDATE users SET name=? WHERE id = ?", [user.name, id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                } else {
                    result(null, res);
                }
            });    
        }
        else{
            result(null,err);
        }
    });

};

User.delete = function (id, result) {
    dbConn.query("SELECT * FROM users WHERE id = ?",[id],function(err,res){
        if(res.length!=0){
            dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
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
            result(null,err);
        }
    });
};

module.exports = User;