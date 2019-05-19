<?php 
    include '../conexion.php';

    try{
        $membresia = $conn->prepare('INSERT INTO Membresias (Id_Cliente, fecha_inicio, fecha_fin) 
        VALUES(:ID, :inicio, :fin)');

        $membresia->bindParam(':ID', $_POST['id-cliente']);
        $membresia->bindParam(':inicio', $_POST['inicio']);
        $membresia->bindParam(':fin', $_POST['fin']);

        $membresia->execute();
        echo 1;
    }catch(PDOException $e){
        echo "Error: " .$e->getMessage();
    }
    $conn = null;
?>