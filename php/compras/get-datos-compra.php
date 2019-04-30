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
            $compra->descripcionCompra = $row['descripcioin_compra'];
            $compra->montoCompra = $row['fecha_compra'];
            $compra->cantidad = $row['cantidad'];
            $compra->fechaCompra = $row['fecha_compra'];
        }
        
        $compraJSON = json_encode($compra);
       echo $compraJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>