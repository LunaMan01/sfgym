<?php 
    include '../conexion.php';

    try{
        $añadir = $conn->prepare('INSERT INTO Gastos (descripcion_gasto, monto_gasto, fecha_gasto, Id_Tipo) VALUES 
        (:descripcion, :monto, :fecha, :tipo)');
        
        $añadir->binParam(':descripcion', $_POST['descripcion-gasto']);
        $añadir->binParam(':monto', $_POST['monto-gasto']);
        $añadir->binParam(':fecha', $_POST['fecha-gasto']);
        $añadir->binParam(':tipo', $_POST['tipo-gasto']);
        
        $añadir->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>