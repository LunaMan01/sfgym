<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Membresias SET
        fecha_inicio = :inicio,
        fecha_fin = :fin
        WHERE Id_Membresia = '. $_POST['id']);

        $modificar->bindParam(':inicio', $_POST['inicio']);
        $modificar->bindParam(':fin', $_POST['fin']);

        $modificar->execute();
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>