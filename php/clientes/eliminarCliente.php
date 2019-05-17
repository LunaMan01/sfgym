<?php
    include '../conexion.php';
    try{

        $delete = $conn->prepare('UPDATE Clientes SET activo = 0 WHERE Id_Cliente ='.$_POST['id-cliente']);
        $delete->execute();
        
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
?>