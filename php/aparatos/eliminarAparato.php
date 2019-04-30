<?php 
    include '../conexion.php';

    try{
        $eliminar = $conn->prepare('DELETE FROM Aparatos WHERE Id_Aparato = '. $_POST['id-aparato']);

        $eliminar->execute();

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>