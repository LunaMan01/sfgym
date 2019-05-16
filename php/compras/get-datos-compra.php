<?php 
    include '../conexion.php';
    //$conex = $conn;
    $array = array();
    try {
        
        $preparar = 'SELECT * FROM Compras WHERE Id_Compra = '.$_POST['id-compra'];
        $compra = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $compra->idCompra = $row['Id_Compra'];
            $compra->idInstructor = $row['Id_Instructor'];
            $compra->descripcionCompra = $row['descripcion_compra'];
            $compra->montoCompra = $row['monto_compra'];
            $compra->fechaCompra = $row['fecha_compra'];
            $compra->tipoCompra = $row['Id_TipoCompra'];
        }
        
        $compraJSON = json_encode($compra);
       echo $compraJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>