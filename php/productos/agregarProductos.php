<?php 
    include '../conexion.php';
    console_log('Agregado');
    try{
        $agregar = $conn->prepare('INSERT INTO Productos (nombre_producto, fecha_caducidad, existencia_producto, precio_producto)
        VALUES (:nombre, :fecha, :existencia, :precio)');

        $agregar->bindParam(':nombre', $_POST['nombre-producto']);
        $agregar->bindParam(':fecha', $_POST['fecha-caducidad']);
        $agregar->bindParam(':existencia', $_POST['existencia']);
        $agregar->bindParam(':precio', $_POST['precio']);

        $agregar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>