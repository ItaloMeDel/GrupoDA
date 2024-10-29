<?php
$servername = "localhost";
$username = "root";
$password = ""; //
$dbname = "registro_usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar la contraseña
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $sexo = $_POST['sexo'];
    $temas_interes = implode(", ", $_POST['temas']); // Convertir el array en una cadena
    $aficiones = implode(", ", $_POST['aficiones']); // Convertir el array en una cadena

    $sql = "INSERT INTO usuarios (nombre, direccion, correo, contrasena, fecha_nacimiento, sexo, temas_interes, aficiones)
            VALUES ('$nombre', '$direccion', '$correo', '$contrasena', '$fecha_nacimiento', '$sexo', '$temas_interes', '$aficiones')";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
