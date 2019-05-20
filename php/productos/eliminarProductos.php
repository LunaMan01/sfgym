<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('DELETE FROM Productos WHERE Id_Producto ='. $_POST['id-producto']);
        
        $delete->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>