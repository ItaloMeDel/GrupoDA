var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'pruebaclase',
    user: 'root',
    password: '',
});

conexion.connect(function (err) {
    if (err) {
        console.log("Error de conexion" + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});


conexion.query('select * from empleados', function (error, results) {
    if (error) throw error;
    results.forEach(element => { console.log(element); });
});

conexion.end();