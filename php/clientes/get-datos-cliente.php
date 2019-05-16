<?php
    include '../conexion.php';
    $conex = $conn;
    $array = array();
    try {
        $idC = $_POST["id-cliente"];
        $preparar = 'SELECT nombre_cliente, apellido_paterno, apellido_materno, edad, numero, colonia, 
        calle, numero_exterior, numero_interior 
        FROM Clientes, Telefonos, Direcciones WHERE Clientes.Id_Cliente = '.$_POST['id-cliente'].' 
        AND Telefonos.Id_Cliente = '.$_POST['id-cliente'].' AND Direcciones.Id_Cliente = '.$_POST['id-cliente'];
        $cliente = new \stdClass();

        foreach ($conn->query($preparar) as $row) {
            $cliente->nombre = $row['nombre_cliente'];
            $cliente->apPaterno = $row['apellido_paterno'];
            $cliente->apMaterno = $row['apellido_materno'];
            $cliente->edad = $row['edad'];
            $cliente->numero = $row['numero'];
            $cliente->colonia = $row['colonia'];
            $cliente->calle = $row['calle'];
            $cliente->numeroExterior = $row['numero_exterior'];
            $cliente->numeroInterior = $row['numero_interior'];
        }
        
        $clienteJSON = json_encode($cliente);
        echo $clienteJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>
