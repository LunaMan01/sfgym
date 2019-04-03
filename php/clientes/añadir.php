<?php
    include '../conexion.php';
    $conex = $conn;
    try {
        echo "Conexion";
        $preparar = $conn->prepare('INSERT INTO Clientes (nombre_cliente, apellido_paterno, apellido_materno, edad) 
        VALUES (:nombre, :paterno, :materno, :edad)');
        
        $preparar->bindParam(':nombre', $_POST['nombre_cliente']);
        $preparar->bindParam(':paterno', $_POST['ap-parno']);
        $preparar->bindParam(':materno', $_POST['ap-marno']);
        $preparar->bindParam(':edad', $_POST['edad']);
        //$preparar->bindParam(':activo', $_POST['']);
        //$preparar->bindParam(':genero', $_POST['']);
        
        $preparar->execute();
        echo "New records created successfully";
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
        console_log("Error");
    }
    $conn = null;
?>