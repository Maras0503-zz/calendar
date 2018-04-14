const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const mysql = require('mysql');
const db = require('./db_connection');

const app = express();
 
//SETTING UP CORS PARAMETERS
var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

//GIVE THE REFERENCE TO ANGULAR APP
app.use(express.static('../dist'));

//CONNECTION TO MySQL PARAMETERS
var connectionSetting = {
  host: "mpiesik.pl",
  user: "marek050_storage",
  password: "marek123",
  database: "marek050_storage"
};

//STARTING SERVER ON PORT 8000
app.listen(8000, () => {
  console.log('Server started!');
});

//TEST CONNETCTION TO DATABASE
app.route('/api/users').get((req, res) => {
  var connection = db.connection();
  connection.query('select user_fname, user_lname from user_tab', function (err, result, fields) {
    res.send({
      result
    });
  });
  connection.end();
});