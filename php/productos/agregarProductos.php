<?php 
    include '../conexion.php';

    try{
        $agregar = $conn->prepare('INSERT INTO Productos (descripcion_producto, precio_producto, existencia_producto)
        VALUES (:descripcion, :precio, :existencia)');

        $agregar->bindParam(':descripcion', $_POST['descripcion']);
        $agregar->bindParam(':precio', $_POST['precio']);
        $agregar->bindParam(':existencia', $_POST['existencia']);

        $agregar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>