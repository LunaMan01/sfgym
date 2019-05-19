<?php
    include '../conexion.php';
    
    try{
        //MODIFICAR DATOS PERSONALES DE LA PERSONA
        $modfPerson = $conn->prepare('UPDATE Clientes SET 
            nombre_cliente = :nombre, 
            apellido_paterno = :paterno, 
            apellido_materno = :materno,
            edad = :edad,
            Id_Genero = :genero
            WHERE Id_Cliente = '.$_POST['id-cliente']);

        $modfPerson->bindParam(':nombre', $_POST['nombre_cliente']);
        $modfPerson->bindParam(':paterno', $_POST['ap-parno']);
        $modfPerson->bindParam(':materno', $_POST['ap-marno']);
        $modfPerson->bindParam(':edad', $_POST['edad']);
        $modfPerson->bindParam(':genero', $_POST['genero']);

        $modfPerson->execute();

        //MODIFICAR NUMERO DE LA PERSONA
        $modfNumero = $conn->prepare('UPDATE Telefonos SET
        numero = :numero 
        WHERE Id_Cliente = '. $_POST['id-cliente']);

        $modfNumero->bindParam(':numero', $_POST['telefono']);

        $modfNumero->execute();

        //MODIFICAR DIRECCION DE LA PERSONA
        $modfDirecc = $conn->prepare('UPDATE Direcciones SET
        colonia = :colonia,
        calle = :calle,
        numero_exterior = :exterior,
        numero_interior = :interior
        WHERE Id_Cliente = '.$_POST['id-cliente']);

        $modfDirecc->bindParam(':colonia', $_POST['colonia']);
        $modfDirecc->bindParam(':calle', $_POST['calle']);
        $modfDirecc->bindParam(':exterior', $_POST['num-ext']);
        $modfDirecc->bindParam(':interior', $_POST['num-int']);

        $modfDirecc->execute();
        echo 1;
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>