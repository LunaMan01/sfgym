<?php 
    include '../conexion.php';

    try{
        $delete = "DELETE FROM Membresias WHERE Id_Cliente LIKE ". $_POST['id'].
        "AND fecha_inicio LIKE ".$_POST['inicio']."AND fecha_fin LIKE ".$_POST['fin'];
        
        $conn->execute($delete);

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>