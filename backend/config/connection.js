var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Praveen123",
    database: "testnew",
    multipleStatements: true
});

con.connect(function(err) {
    if (err){
        console.log("error");
    } else {
        console.log("connected");
    }
});

module.exports = con;