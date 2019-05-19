<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('DELETE FROM Membresias WHERE Id_Membresia ='. $_POST['id-membresia']);
        
        $delete->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>