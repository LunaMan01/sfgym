<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Compras SET
        Id_Instructor = :instructor,
        monto_compra = :monto,
        fecha_compra = :fecha
        WHERE Id_Compra = '. $_POST['id-compra']);

        $modificar->bindParam(':instructor',$_POST['id-instructor']);
        $modificar->bindParam(':monto',$_POST['monto-compra']);
        $modificar->bindParam(':fecha',$_POST['fecha-compra']);

        $modificar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>