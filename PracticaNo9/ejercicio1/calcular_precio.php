<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $precio_base = $_POST['precio_base'];

    $fecha_nacimiento = new DateTime($fecha_nacimiento);
    $hoy = new DateTime();

    $edad = $hoy->diff($fecha_nacimiento)->y;

    if ($edad < 2) {
        $precio_final = 0;  //
    } elseif ($edad >= 2 && $edad < 18) {
        $precio_final = $precio_base * 0.75;  //
    } else {
        $precio_final = $precio_base;  //
    }

    echo "La edad del pasajero es: $edad años.<br>";
    echo "El precio del pasaje es: $precio_final";
}
?>
