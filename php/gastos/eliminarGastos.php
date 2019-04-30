<?php 
    include '../conexion.php';

    try{
        $delete = $conn->prepare('DELETE FROM Gastos WHERE Id_Gasto ='. $_POST['id-gasto']);
        
        $delete->execute();

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>