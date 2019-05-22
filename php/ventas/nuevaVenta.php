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
            VALUES (:idCliente, :idInstructor, :fecha, :total)");

        $venta->bindParam(':idCliente', $cliente);
        $venta->bindParam(':idInstructor', $instructor);
        $venta->bindParam(':fecha', $fecha);
        $venta->bindParam(':total', $total);

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
        
        
        $cantidadTotal = 0;

        $busqueda = $conn->prepare("SELECT existencia_producto FROM Productos
        WHERE Id_Producto = ". $producto);
        $busqueda->execute();
        $resultado = $busqueda->fetchAll();

        foreach($resultado as $row){
            $cantidadTotal = $row['existencia_producto'];
        } 

        $productos = $conn->prepare("UPDATE Productos SET
            existencia_producto = :cantidad
            WHERE Id_Producto = ". $producto);

        $resta = $cantidadTotal-$cantidad;
        echo '<br>'. $cantidadTotal . '<br>' . $resta;
        $productos->bindParam(':cantidad', $resta);

        $productos->execute();
    }
    $conn == null;
?>