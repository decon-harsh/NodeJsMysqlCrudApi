'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : 'b27moh4kvyykhnpa1lgb-mysql.services.clever-cloud.com',
  port     : '3306',
  user     : 'ufhydelnjutmzqj6',
  database : 'b27moh4kvyykhnpa1lgb',
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
