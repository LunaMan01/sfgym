<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Visitas SET
        fecha_visitas = :fecha,
        Id_Cliente = :ID
        WHERE Id_Visita = '. $_POST['id']);

        $modificar->bindParam(':fecha', $_POST['fecha']);
        $modificar->bindParam(':ID', $_POST['id']);

        $modificar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>