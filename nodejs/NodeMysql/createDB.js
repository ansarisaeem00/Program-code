var mysql = require('mysql');

var con = require('./connection'); //creating object

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});