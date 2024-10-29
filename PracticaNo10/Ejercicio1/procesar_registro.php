<?php

$conexion = new mysqli('localhost', 'usuario1', '123321', 'Inscripcion_usuarios');

if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

$nombre_completo = $_POST['nombre_completo'];
$direccion = $_POST['direccion'];
$correo_electronico = $_POST['correo_electronico'];
$contrasena = $_POST['contrasena'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$sexo = $_POST['sexo'];
$temas_interes = implode(", ", $_POST['temas_interes']);
$aficiones = implode(", ", $_POST['aficiones']);

$sql = "INSERT INTO usuarios (nombre_completo, direccion, correo_electronico, contraseña, fecha_nacimiento, sexo, temas_interes, aficiones)
        VALUES ('$nombre_completo', '$direccion', '$correo_electronico', '$contraseña', '$fecha_nacimiento', '$sexo', '$temas_interes', '$aficiones')";

if ($conexion->query($sql) === TRUE) {
    echo 
    echo "<table border='1'>
            <tr><td>Nombre completo:</td><td>$nombre_completo</td></tr>
            <tr><td>Dirección:</td><td>$direccion</td></tr>
            <tr><td>Correo electrónico:</td><td>$correo_electronico</td></tr>
            <tr><td>Fecha de nacimiento:</td><td>$fecha_nacimiento</td></tr>
            <tr><td>Sexo:</td><td>$sexo<"<h2>Registro completado</h2>";/td></tr>
            <tr><td>Temas de interés:</td><td>$temas_interes</td></tr>
            <tr><td>Aficiones:</td><td>$aficiones</td></tr>
          </table>";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>
