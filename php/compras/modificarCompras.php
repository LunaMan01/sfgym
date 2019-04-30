<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Compras SET
        descripcion_compra = :descripcion,
        monto_compra = :monto,
        cantidad = :cantidad,
        Id_Instructor = :instructor,
        fecha_compra = :fecha
        WHERE Id_Compra = '. $_POST['id-compra']);

        $modificar->bindParam(':descripcion',$_POST['descripcion-compra']);
        $modificar->bindParam(':monto',$_POST['monto_compra']);
        $modificar->bindParam(':cantidad',$_POST['cantidad']);
        $modificar->bindParam(':instructor',$_POST['id-instructor']);
        $modificar->bindParam(':fecha',$_POST['fecha-compra']);

        $modificar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>