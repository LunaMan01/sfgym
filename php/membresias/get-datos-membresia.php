<?php
    include '../conexion.php';
    //$conex = $conn;
    $array = array();
    try {
        
        $preparar = 'SELECT * FROM Membresias WHERE Id_Membresia = '.$_POST['id-membresia'];
        $membresia = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $membresia->idCliente = $row['Id_Cliente'];
            $membresia->fechaInicio = $row['fecha_inicio'];
            $membresia->fechaFin = $row['fecha_fin'];
        }
        
        $membresiaJSON = json_encode($membresia);
       echo $membresiaJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>
