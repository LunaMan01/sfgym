<?php 
    include '../conexion.php';
    
    try{
        $json = $_POST['productos'];

        $array = json_decode($json);

        echo $array;

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn == null;
?>