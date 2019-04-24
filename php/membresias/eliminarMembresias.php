<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('DELETE FROM Membresias WHERE Id_Membresia ='. $_POST['id-membresia']);
        
        $delete->execute();

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>