<?php 
    include '../conexion.php';

    try{
        $añadir = $conn->prepare('INSERT INTO Gastos (descripcion_gasto, monto_gasto, fecha_gasto, Id_Tipo) VALUES 
        (:descripcion, :monto, :fecha, :tipo)');
        
        $añadir->bindParam(':descripcion', $_POST['descripcion-gasto']);
        $añadir->bindParam(':monto', $_POST['monto-gasto']);
        $añadir->bindParam(':fecha', $_POST['fecha-gasto']);
        $añadir->bindParam(':tipo', $_POST['tipo-gasto']);
        
        $añadir->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>