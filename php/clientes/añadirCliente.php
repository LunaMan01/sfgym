<?php
    include '../conexion.php';
    
    try {
        echo "Conexion";
        $sexo = '0';
        if(in_array('1', $_POST['sexo'])){
            $sexo = '1';
        } else {
            $sexo = '2';
        }

        $activo = 1;
    //DATOS MAS BASICOS DEL CLIENTE    
        $cliente = $conn->prepare('INSERT INTO Clientes (nombre_cliente, apellido_paterno, apellido_materno, edad, activo, Id_Genero) 
        VALUES (:nombre, :paterno, :materno, :edad, '.$activo.', :Id_Genero)');
        
        $cliente->bindParam(':nombre', $_POST['nombre_cliente']);
        $cliente->bindParam(':paterno', $_POST['ap-parno']);
        $cliente->bindParam(':materno', $_POST['ap-marno']);
        $cliente->bindParam(':edad', $_POST['edad']);
        $cliente->bindParam(':Id_Genero', $sexo);
        $cliente->execute();

    //INSERTAR TELEFONO
        //OBTENER ULTIMO ID INGRESADO
        $lastId = $conn->lastInsertId();
    
        //INSERTA TELEFONO    
        $telefono = $conn->prepare('INSERT INTO Telefonos (Id_Cliente, numero) 
        VALUES (:ID, :numero)');

        $telefono->bindParam(':ID', $lastId);
        $telefono->bindParam(':numero', $_POST['telefono']);
        $telefono->execute();
    
    //INSERTAR DIRECCION
        $direccion = $conn->prepare('INSERT INTO Direcciones (Id_Cliente, colonia, calle, numero_exterior, numero_interior)
        VALUES (:ID, :col, :cal, :numeroex, :numeroin)');

        $direccion->bindParam('ID', $lastId);
        $direccion->bindParam('col', $_POST['colonia']);
        $direccion->bindParam('cal', $_POST['calle']);
        $direccion->bindParam('numeroex', $_POST['num-ext']);
        $direccion->bindParam('numeroin', $_POST['num-int']);
        $direccion->execute();
    
    // //MEMBRESIA
    //     $membresia = $conn->prepare('INSERT INTO Membresias (Id_Cliente, fecha_inicio, fecha_fin)
    //     VALUES (:ID, :inicio, :fin)');

    //     $membresia->bindParam(':ID', $lastId);
    //     $membresia->bindParam(':inicio', $_POST['inicio']);
    //     $membresia->bindParam(':fin', $_POST['fin']);
    //     $membresia->execute();

        echo "New records created successfully";
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>