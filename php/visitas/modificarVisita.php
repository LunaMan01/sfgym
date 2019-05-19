<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Visitas SET
        fecha_visitas = :fecha,
        Id_Cliente = :ID
        WHERE Id_Visita = '. $_POST['id-visita']);

        $modificar->bindParam(':fecha', $_POST['fecha']);
        $modificar->bindParam(':ID', $_POST['id-cliente']);

        $modificar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>