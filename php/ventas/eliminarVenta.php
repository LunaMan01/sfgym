<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('UPDATE Ventas SET cancelada = 1 WHERE Id_Venta ='. $_POST['id-venta']);
        
        $delete->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>