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
        global $fecha;
        $venta = $conn->prepare("INSERT INTO Ventas (Id_Cliente, Id_Instructor, fecha_venta, total_venta)
            VALUES (:idCliente, :idInstructor, :fecha, :total, :cancelada)");

        $venta->bindParam(':idCliente', $cliente);
        $venta->bindParam(':idInstructor', $instructor);
        $venta->bindParam(':fecha', $fecha);
        $venta->bindParam(':total', $total);
        $venta->bindParam(':cancelada', 0);

        $venta->execute();
    }

    function detalleVenta($conn, $venta, $producto, $cantidad, $total){
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, subtotal_venta)
        VALUES (:idVenta, :idProducto, :cantidad, :subtotal)");

        $detalle->bindParam(':idVenta', $venta);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':subtotal', $total);

        $detalle->execute();

        $cantidadP = 0;
        $cantidadProductos = "SELECT existencia_producto from Productos
            WHERE Id_Producto = ". $producto;

        foreach($conn->query($cantidadProductos) as $row){
            $cantidadP = $row['existencia_producto'];
        }
        $resta = $cantidadP - $cantidad;
        $productos = $conn->prepare("UPDATE Productos SET
            existencia_producto = :cantidad
            WHERE Id_Producto = ". $producto);
        $productos->bindParam(':cantidad', $resta);

        $productos->execute();
    }
    $conn == null;
?>