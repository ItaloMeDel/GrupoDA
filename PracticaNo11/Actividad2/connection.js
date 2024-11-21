const mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'biblioteca',
    port:'3306'
});

con.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Conectado exitosamente a la BD")
});

module.exports = con;