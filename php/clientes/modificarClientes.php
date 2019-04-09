<?php
    include 'conexcion.php';

    try{
        $modificar = $conn->prepare('UPDATE Clientes SET 
            nombre_cliente = :nombre, 
            apellido_paterno = :paterno, 
            apellido_materno = :materno,
            edad = :edad,
            activo = :activo,
            Id_Genero = :genero WHERE Id_Cliente ='. $_POST['id']);

        $modificar->bindParam(':nombre', $_POST['']);
        $modificar->bindParam(':paterno', $_POST['']);
        $modificar->bindParam(':materno', $_POST['']);
        $modificar->bindParam(':edad', $_POST['']);
        $modificar->bindParam(':activo', $_POST['']);
        $modificar->bindParam(':genero', $_POST['']);

        $modificar->execute();

    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>