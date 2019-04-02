<?php
    include 'conexion.php'

    $nombre_cliente = $_POST['nombre_cliente']
    $apellido_paterno = $_POST['ap-parno']

    $sql = "INSERT INTO Clientes (nombre_cliente, apellido_paterno) VALUES ('".$nombre_cliente."', '".$apellido_paterno."')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $conn = null;
?>