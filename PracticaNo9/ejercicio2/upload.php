<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestion_archivos";

// conexion bd
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if (isset($_POST['submit']) && isset($_FILES['archivo'])) {
    $especialidad = $_POST['especialidad'];
    $archivo = $_FILES['archivo'];

    $nombreArchivo = $archivo['name'];
    $rutaTemp = $archivo['tmp_name'];
    $directorioDestino = "uploads/" . $especialidad;

    // error si no existe la direccion de destino
    if (!is_dir($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }

    $rutaArchivo = $directorioDestino . "/" . basename($nombreArchivo);
    if (move_uploaded_file($rutaTemp, $rutaArchivo)) {
        $sql = "INSERT INTO archivos (nombre_archivo, ruta, especialidad) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $nombreArchivo, $rutaArchivo, $especialidad);

        if ($stmt->execute()) {
            echo "Archivo subido y registrado exitosamente.";
        } else {
            echo "Error al registrar el archivo: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error al mover el archivo.";
    }
}
//cerrar la db jeje
$conn->close();
?>
