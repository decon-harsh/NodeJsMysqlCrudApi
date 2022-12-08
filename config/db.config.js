'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : 'bzane7kbxx0ekdd0lqge-mysql.services.clever-cloud.com',
  port     : '3306',
  user     : 'ufhydelnjutmzqj6',
  database : 'bzane7kbxx0ekdd0lqge',
  password : 'F1MSbuqe6AqR0ylbgkaV',
});

dbConn.on('error', err => {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // db error reconnect
      disconnect_handler();
  } else {
      throw err;
  }
});

module.exports = dbConn;
