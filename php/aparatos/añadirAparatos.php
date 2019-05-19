<?php 
    include '../conexion.php';

    try{
        $agregar = $conn->prepare('INSERT INTO Aparatos (nombre_aparato) 
        VALUES (:aparato)');

        $agregar->bindParam(':aparato', $_POST['nombre-aparato']);

        $agregar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>