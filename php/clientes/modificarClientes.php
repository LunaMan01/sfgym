<?php
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Clientes SET 
            nombre_cliente = :nombre, 
            apellido_paterno = :paterno, 
            apellido_materno = :materno,
            edad = :edad
             WHERE Id_Cliente = '.$_POST['id']);

        $modificar->bindParam(':nombre', $_POST['nombre_cliente']);
        $modificar->bindParam(':paterno', $_POST['ap-parno']);
        $modificar->bindParam(':materno', $_POST['ap-marno']);
        $modificar->bindParam(':edad', $_POST['edad']);
        // $modificar->bindParam(':genero', $_POST['']);

        $modificar->execute();
        
        
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>