<?php
    include '../conexion.php';
    $conex = $conn;
    $array = array();
    try {
        $idC = $_POST["id"];
        $preparar = 'SELECT * FROM Clientes WHERE Id_Cliente='.$idC;
        $cliente = new \stdClass();
        foreach ($conn->query($preparar) as $row) {
            $cliente->nombre = $row['nombre_cliente'];
        }
        
        $clienteJSON = json_encode($cliente);
       echo $clienteJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>