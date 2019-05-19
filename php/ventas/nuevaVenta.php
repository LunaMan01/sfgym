<?php 
    include '../conexion.php';
    
    $fecha = date('d/m/Y');

    try{
        $sell = $_POST['venta'];
        $arraySell = json_decode($sell, true);

        $items = $_POST['productos'];
        $arrayItems = json_decode($items, true);

        agregarVentas($conn, $arraySell['nipCliente'], $arraySell['idInstructor'], $arraySell['totalVenta']);

        $lastId = $conn->lastInsertId();

        foreach($arrayItems as $row){
            detalleVenta($conn, $lastId, $row['id'], $row['cantidad'], $row['subtotal']);
        }

        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function agregarVentas($conn, $cliente, $instructor, $total){
        $venta = $conn->prepare("INSERT INTO Ventas (Id_Cliente, Id_Instructor, total_venta)
        VALUES (:idCliente, :idInstructor, :total)");

        $venta->bindParam(':idCliente', $cliente);
        $venta->bindParam(':idInstructor', $instructor);
        $venta->bindParam(':total', $total);

        $venta->execute();
    }

    function detalleVenta($conn, $venta, $producto, $cantidad, $total){
        global $fecha;
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, total_venta, fecha_venta)
        VALUES (:idVenta, :idProducto, :cantidad, :total, :fecha)");

        $detalle->bindParam(':idVenta', $venta);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':total', $total);
        $detalle->bindParam(':fecha', $fecha);

        $detalle->execute();
    }
    $conn == null;
?>