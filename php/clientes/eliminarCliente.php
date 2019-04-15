<?php
    include '../conexion.php';
    try{
        echo "eliminado";

        $inactivo = 0;
        $delete = $conn->prepare('UPDATE Clientes SET activo ='.$inactivo.' WHERE Id_Cliente ='.$_POST['id']);
        $delete->execute();
        
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
?>