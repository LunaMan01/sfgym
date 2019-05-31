<?php 
    include '../conexion.php';

    try{
        $eliminar = $conn->prepare('UPDATE Compras SET cancelada = 1 WHERE Id_Compra = '. $_POST['id-compra']);

        $eliminar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'error';
    }
?>