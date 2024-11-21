var mysql = require('mysql');
var express = require('express');
var app = express();

var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'pruebaclase',
    user: 'root',
    password: '',
});

conexion.connect(function (err) {
    if (err) {
        console.log("Error: " + err.stack);
        return;
    }
    console.log("Conectado");
});

app.use(express.static('public'));

app.get('/empleados', function (req, res) {
    conexion.query('SELECT * FROM empleados', function (err, results) {
        if (err) {
            console.log("Error" + err);
            res.send('Error' + err);
            return;
        }

        let html = `
        <link rel="stylesheet" type="text/css" href="/styles.css">
        <h1>Lista de Empleados</h1>
        <table>
            <tr>
                <th>ID</th><th>Nombre</th><th>Apellido</th><th>Departamento</th>
                <th>Fecha de Contratación</th><th>Salario</th><th>Email</th>
                <th>Teléfono</th><th>Fecha de Nacimiento</th>
            </tr>`;

        results.forEach(empleado => {
            console.log("Procesando empleado: " + empleado.nombre + " " + empleado.apellido);
            html += `<tr>
                        <td>${empleado.id}</td>
                        <td>${empleado.nombre}</td>
                        <td>${empleado.apellido}</td>
                        <td>${empleado.departamento}</td>
                        <td>${new Date(empleado.fecha_contratacion).toLocaleDateString()}</td>
                        <td>${empleado.salario}</td>
                        <td>${empleado.email}</td>
                        <td>${empleado.telefono}</td>
                        <td>${new Date(empleado.fecha_nacimiento).toLocaleDateString()}</td>
                     </tr>`;
        });

        html += '</table>';
        res.send(html);
    });
});

app.listen(3000, function () {
    console.log('Conectado');
});
