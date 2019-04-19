<?php 
    include '../conexion.php';

    try{
        $delete = "DELETE FROM Membresias WHERE Id_Membresia LIKE ". $_POST['id'];
        
        $conn->execute($delete);

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>