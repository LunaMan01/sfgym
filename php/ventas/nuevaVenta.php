<?php 
    include '../conexion.php';
    
    $fecha = date('d/m/Y');

    try{
        $sell = $_POST['venta'];
        $arraySell = json_decode($json);

        $items = $_POST['productos'];
        $arrayItems = json_decode($json);

        foreach($arraySell as $row){

        }

        $lastId = $conn->lastInsertId();

        foreach($arrayItems as $row){
            detalleVenta($conn, $lastId, $row['id'], $row['cantidad'], $row['subtotal']);
        }

        print_r($array);

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function detalleVenta($conn, $venta, $producto, $cantidad, $total){
        global $fecha;
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, total_venta, fecha_venta)
        VALUES :idVenta, :idProducto, :cantidad, :total, :fecha");

        $detalle->bindParam(':idVenta', $venta);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':total', $total);
        $detalle->bindParam(':fecha', $fecha);

        $detalle->execute();
    }

    function agregarVentas(){

    }
    $conn == null;
?>