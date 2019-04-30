<?php 
    include '../conexion.php';

    try{
        $eliminar = $conn->prepare('DELETE FROM Compras WHERE Id_Compra = '. $_POST['id-compra']);

        $eliminar->execute();
    }catch(PDOException $e){
        echo 'error';
    }
?>