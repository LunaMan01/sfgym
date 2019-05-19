<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Aparatos SET
        nombre_aparato = :aparato
        WHERE Id_Aparato = '.$_POST['id-aparato']);

        $modificar->bindParam(':aparato', $_POST['nombre-aparato']);
        $modificar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>