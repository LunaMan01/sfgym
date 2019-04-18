<?php 
    include '../conexion.php';

    try{
        $membresia = $conn->prepare('INSERT INTO Membresias (fecha_inicio, fecha_fin) 
        VALUES(:inicio, :fin) WHERE Id_Cliente LIKE '. $_POST['id']);

        $membresia->bindParam(':inicio', $_POST['inicio']);
        $membresia->bindParam(':fin', $_POST['fin']);

        $membresia->execute();

    }catch(PDOException $e){
        echo "Error: " .$e->getMessage();
    }
    $conn = null;
?>