<?php
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Productos SET
        descripcion_producto = :nombre,
        fecha_caducidad = :caducidad,
        existencia_producto = :existencia,
        precio_producto = :precio
        WHERE Id_Producto = '. $_POST['id-producto']);

        $modificar->bindParam(':nombre', $_POST['nombre-producto']);
        $modificar->bindParam(':caducidad', $_POST['fecha-caducidad']);
        $modificar->bindParam(':existencia', $_POST['existencia']);
        $modificar->bindParam(':precio', $_POST['precio']);

        $modificar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>