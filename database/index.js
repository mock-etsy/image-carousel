const mysql = require('mysql');
const mysqlConfig = require('./config.js');
require('dotenv').config({path:__dirname+'../.env'});
const connection = mysql.createConnection(mysqlConfig);

// var getAllListingImages = function(cb) {
//     connection.query('SELECT * FROM')
// }

const getListingImages = function(listingId, cb) {
    connection.query(`SELECT ${listingId} FROM`)
}