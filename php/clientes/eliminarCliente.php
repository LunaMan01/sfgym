<?php
    include '../conexion.php';
    try{
        $delete = $conn->prepare("DELETE FROM Clientes WHERE Id_Cliente =".$_POST['id']);
        $delete->execute();

        echo "New records created successfully";
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
?>