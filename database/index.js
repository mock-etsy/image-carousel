const mysql = require("mysql");
const mysqlConfig = require("./config.js");
// require('dotenv').config({path:__dirname+'../.env'});

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log("Database not connected: ", err);
  } else {
    console.log("Database connected");
  }
});
// var getAllListingImages = function(cb) {
//     connection.query('SELECT * FROM')
// }

const seedDbListings = function(listingId, mainImage, cb) {
  connection.query(
    `INSERT INTO images (id, listing_id, mainImage) VALUES (id, ${listingId}, ${mainImage}) ON DUPLICATE KEY UPDATE `
  );
};

const getListingImages = function(listingId, cb) {
  connection.query(`SELECT ${listingId} FROM`);
};
