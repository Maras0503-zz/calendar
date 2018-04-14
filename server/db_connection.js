const mysql = require('mysql');

const connectionSetting = {
  host: "mpiesik.pl",
  user: "marek050_storage",
  password: "marek123",
  database: "marek050_storage"
};
function connection(){
  return mysql.createConnection(connectionSetting);
}

exports.connection = connection;