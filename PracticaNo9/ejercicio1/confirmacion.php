<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = trim($_POST['nombre']);
    $direccion = trim($_POST['direccion']);
    $correo = trim($_POST['correo']);
    $contrasena = $_POST['contrasena'];
    $confirmar_contrasena = $_POST['confirmar_contrasena'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $precio_base = $_POST['precio_base'];
    $sexo = $_POST['sexo'];
    $temas_interes = isset($_POST['temas']) ? implode(", ", $_POST['temas']) : "No seleccionados";
    $aficiones = isset($_POST['aficiones']) ? implode(", ", $_POST['aficiones']) : "No seleccionadas";

    if ($contrasena !== $confirmar_contrasena) {
        die("Las contraseñas no coinciden. <a href='index.html'>Volver al formulario</a>");
    }

    $fecha_nacimiento_dt = new DateTime($fecha_nacimiento);
    $hoy = new DateTime();
    $edad = $hoy->diff($fecha_nacimiento_dt)->y;

    if ($edad < 2) {
        $precio_boleto = 0;  // Infantes no pagan
    } elseif ($edad >= 2 && $edad < 18) {
        $precio_boleto = $precio_base * 0.75;  // Menores de edad pagan el 75%
    } else {
        $precio_boleto = $precio_base;  // Adultos pagan el precio completo
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación del Registro de Usuario</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e6f7ff;
            padding: 20px;
        }
        .confirmation-container {
            width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border: 2px solid #4CAF50;
            border-radius: 5px;
        }
        .confirmation-container h2 {
            text-align: center;
            color: #4CAF50;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #4CAF50;
        }
        th, td {
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .confirm-button {
            display: block;
            width: 200px;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            text-align: center;
            text-decoration: none;
            margin: 30px auto 0 auto;
            border-radius: 5px;
            font-size: 16px;
        }
        .confirm-button:hover {
            background-color: #45a049;
        }
        .error {
            color: red;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="confirmation-container">
        <h2>Confirmación del Registro de Usuario</h2>

        <table>
            <tr>
                <th>Nombre completo</th>
                <td><?php echo htmlspecialchars($nombre); ?></td>
            </tr>
            <tr>
                <th>Dirección</th>
                <td><?php echo nl2br(htmlspecialchars($direccion)); ?></td>
            </tr>
            <tr>
                <th>Correo electrónico</th>
                <td><?php echo htmlspecialchars($correo); ?></td>
            </tr>
            <tr>
                <th>Fecha de nacimiento</th>
                <td><?php echo htmlspecialchars($fecha_nacimiento); ?></td>
            </tr>
            <tr>
                <th>Edad</th>
                <td><?php echo htmlspecialchars($edad); ?> años</td>
            </tr>
            <tr>
                <th>Sexo</th>
                <td><?php echo htmlspecialchars($sexo); ?></td>
            </tr>
            <tr>
                <th>Temas de interés</th>
                <td><?php echo htmlspecialchars($temas_interes); ?></td>
            </tr>
            <tr>
                <th>Aficiones seleccionadas</th>
                <td><?php echo htmlspecialchars($aficiones); ?></td>
            </tr>
            <tr>
                <th>Precio final del boleto</th>
                <td>$<?php echo number_format($precio_boleto, 2); ?></td>
            </tr>
        </table>

        <form action="almacenar.php" method="POST">
            <!-- Campos ocultos para enviar los datos a almacenar.php -->
            <input type="hidden" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>">
            <input type="hidden" name="direccion" value="<?php echo htmlspecialchars($direccion); ?>">
            <input type="hidden" name="correo" value="<?php echo htmlspecialchars($correo); ?>">
            <input type="hidden" name="contrasena" value="<?php echo htmlspecialchars($contrasena); ?>">
            <input type="hidden" name="fecha_nacimiento" value="<?php echo htmlspecialchars($fecha_nacimiento); ?>">
            <input type="hidden" name="sexo" value="<?php echo htmlspecialchars($sexo); ?>">
            <input type="hidden" name="temas_interes" value="<?php echo htmlspecialchars($temas_interes); ?>">
            <input type="hidden" name="aficiones" value="<?php echo htmlspecialchars($aficiones); ?>">
            <input type="hidden" name="precio_boleto" value="<?php echo htmlspecialchars($precio_boleto); ?>">

            <input type="submit" value="Confirmar datos" class="confirm-button">
        </form>
    </div>

</body>
</html>
