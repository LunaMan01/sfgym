<?php 
    include '../conexion.php';

    try{
        $agregar = $conn->prepare('INSERT INTO Compras (descripcion_compra, monto_compra, cantidad, Id_Instructor) VALUES 
        (:descripcion, :monto, :cantidad, :instructor)');

        $agregar->bindParam(':descripcion', $_POST['descripcio-producto']);
        $agregar->bindParam(':monto', $_POST['monto_compra']);
        $agregar->bindParam(':cantidad', $_POST['cantidad']);
        $agregar->bindParam(':instructor', $_POST['id-instructor']);

        $agregar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>