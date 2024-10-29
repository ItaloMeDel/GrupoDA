<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestion_archivos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT id, nombre_archivo, ruta, especialidad, fecha_subida FROM archivos";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivos por Especialidad</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Lista de Archivos</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Fecha de Subida</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['nombre_archivo']); ?></td>
                <td><?php echo htmlspecialchars($row['especialidad']); ?></td>
                <td><?php echo $row['fecha_subida']; ?></td>
                <td><a href="<?php echo $row['ruta']; ?>" target="_blank">Ver Archivo</a></td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</body>
</html>

<?php
$conn->close();
?>
