<?php
    include '../conexion.php';

    $array = array();
    try {
        
        $preparar = 'SELECT Id_Visita, nombre_cliente, fecha_visitas, Clientes.Id_Cliente FROM Visitas, Clientes 
        WHERE Visitas.Id_Cliente = Clientes.Id_Cliente AND Visitas.Id_Visita = '.$_POST['id-visita'];

        $visita = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $visita->idCliente = $row['Id_Cliente'];
            $visita->nombreCliente = $row['nombre_cliente'];
            $visita->fechaVisitas = $row['fecha_visitas'];
        }
        
        $visitaJSON = json_encode($visita);
       echo $visitaJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>
