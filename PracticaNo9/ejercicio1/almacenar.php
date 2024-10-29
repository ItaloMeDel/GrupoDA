<?php
// almacenar.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los valores enviados por el formulario de confirmación
    $nombre = trim($_POST['nombre']);
    $direccion = trim($_POST['direccion']);
    $correo = trim($_POST['correo']);
    $contrasena = $_POST['contrasena'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $sexo = $_POST['sexo'];
    $temas_interes = $_POST['temas_interes'];
    $aficiones = $_POST['aficiones'];
    $precio_boleto = $_POST['precio_boleto'];

    // Hash de la contraseña para mayor seguridad
    $contrasena_hashed = password_hash($contrasena, PASSWORD_DEFAULT);

    // Conexión a la base de datos MySQL
    $servername = "localhost";
    $username = "root";        // Cambia esto si tu usuario de MySQL es diferente
    $password_db = "";         // Cambia esto por tu contraseña de MySQL
    $dbname = "sistema_registro";

    // Crear conexión usando PDO para mayor seguridad
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password_db);
        // Establecer el modo de error de PDO a excepción
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Preparar la sentencia SQL usando prepared statements
        $stmt = $conn->prepare("INSERT INTO usuarios (nombre, direccion, correo, contrasena, fecha_nacimiento, sexo, temas_interes, aficiones, precio_pasaje) 
                                VALUES (:nombre, :direccion, :correo, :contrasena, :fecha_nacimiento, :sexo, :temas_interes, :aficiones, :precio_pasaje)");

        // Asignar valores a los parámetros
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':direccion', $direccion);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':contrasena', $contrasena_hashed);
        $stmt->bindParam(':fecha_nacimiento', $fecha_nacimiento);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':temas_interes', $temas_interes);
        $stmt->bindParam(':aficiones', $aficiones);
        $stmt->bindParam(':precio_pasaje', $precio_boleto);

        // Ejecutar la sentencia
        $stmt->execute();

        // Mensaje de éxito
        $mensaje = "¡Registro exitoso! Los datos han sido almacenados correctamente.";
    }
    catch(PDOException $e) {
        // Mensaje de error
        if ($e->getCode() == 23000) { // Código de error para duplicados (por ejemplo, correo)
            $mensaje = "Error: El correo electrónico ya está registrado. <a href='index.html'>Inténtalo de nuevo</a>.";
        } else {
            $mensaje = "Error: " . $e->getMessage();
        }
    }

    // Cerrar la conexión
    $conn = null;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Almacenamiento de Datos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fff2e6;
            padding: 20px;
            text-align: center;
        }
        .message-container {
            width: 500px;
            margin: 0 auto;
            background-color: #ffe6cc;
            padding: 20px;
            border: 2px solid #ff9933;
            border-radius: 5px;
        }
        .message-container h2 {
            color: #ff6600;
        }
        .message-container a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #ff9933;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .message-container a:hover {
            background-color: #e68a00;
        }
    </style>
</head>
<body>

    <div class="message-container">
        <h2><?php echo htmlspecialchars($mensaje); ?></h2>
        <a href="index.html">Volver al formulario</a>
    </div>

</body>
</html>
