const mysql = require('mysql');
const config = require('./db.config');

const dbConn = mysql.createConnection(config);

dbConn.connect(err=>{
    if(err) console.log('DB conntection field')
    else console.log('DB conntected succesfully')
});

module.exports = dbConn;