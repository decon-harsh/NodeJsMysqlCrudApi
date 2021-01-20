'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : 'mysql80-afe9.euw2.cloud.ametnes.com',
  port     : '3316',
  user     : 'SptzXXJsFr',
  database : '7750202550',
  password : 'FjyeELGT5DoASDVZGsEo'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
