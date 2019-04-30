<?php
    include '../conexion.php';
    //$conex = $conn;
    $array = array();
    try {
        
        $preparar = 'SELECT * FROM Gastos WHERE Id_Gasto = '.$_POST['id-gasto'];
        $gasto = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $gasto->idGasto = $row['Id_Gasto'];
            $gasto->descripcionGasto = $row['descripcion_gasto'];
            $gasto->montoGasto = $row['monto_gasto'];
            $gasto->fechaGasto = $row['fecha_gasto'];
            $gasto->tipoGasto = $row['Id_Tipo'];
        }
        
        $gastoJSON = json_encode($gasto);
       echo $gastoJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>