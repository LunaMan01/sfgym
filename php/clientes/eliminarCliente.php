<?php
    include '../conexion.php';
    try{
        $delete = $conn->prepare("DELETE FROM Clientes WHERE Id_Cliente =".$_POST['id']);
        $delete->execute();

        echo "eliminado";
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
?>