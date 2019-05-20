<?php 
    include '../conexion.php';

    try{
        $eliminar = $conn->prepare('DELETE FROM Aparatos WHERE Id_Aparato = '. $_POST['id-aparato']);

        $eliminar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>