<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('DELETE FROM Visitas WHERE Id_Visita ='. $_POST['id-visita']);
        
        $delete->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>