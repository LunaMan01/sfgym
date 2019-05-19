<?php 
    include '../conexion.php';
    
    try{
        $añadir = $conn->prepare('INSERT INTO Visitas (fecha_visitas, Id_Cliente) 
        VALUES (:fecha, :ID)');

        $añadir->bindParam(':fecha', $_POST['fecha']);
        $añadir->bindParam(':ID', $_POST['id-cliente']);
        $añadir->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>