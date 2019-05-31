<?php 
    include '../conexion.php';

    try{
        
    }catch(PDOException e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>