<?php 
    include '../conexion.php';

    $fecha = date('d/m/Y');

    try{

        

        $sell = $_POST['venta'];
        $arraySell = json_decode($sell, true);

        $items = $_POST['productos'];
        $arrayItems = json_decode($items, true);

        $newItems = $_POST['productosNuevos'];
        $arrayNewItems = json_decode($newItems, true);

        modificarVenta($conn, $arraySell['nipCliente'], $arraySell['idInstructor'], $arraySell['totalVenta']);

        foreach($arrayItems as $row){
            
            modificarProductos($conn, $row['id'], $row['cantidad'], $row['subtotal']);
        }

        foreach($arrayNewItems as $row){
            
            detalleVenta($conn, $row['id'], $row['cantidad'], $row['subtotal']);
        }
      

        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function modificarVenta($conn, $cliente, $instructor, $subtotal){
        
        $modificar = $conn->prepare('UPDATE Ventas SET
        Id_Cliente = :idCliente,
        Id_Instructor = :idInstructor,
        total_venta = :subtotal 
        WHERE Id_Venta = '. $_POST['id-venta']);

        $modificar->bindParam(':idCliente', $cliente);
        $modificar->bindParam(':idInstructor', $instructor);
        $modificar->bindParam(':subtotal', $subtotal);

        $modificar->execute();
        
    }

    function detalleVenta($conn, $producto, $cantidad, $total){
        global $fecha;
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, total_venta, fecha_venta)
        VALUES (:idVenta, :idProducto, :cantidad, :total, :fecha)");

        $detalle->bindParam(':idVenta', $_POST['id-venta']);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':total', $total);
        $detalle->bindParam(':fecha', $fecha);

        $detalle->execute();
        echo 'aquiD';
        
    }

    function modificarProductos($conn, $idProducto, $cantidad, $totalVenta){
        global $fecha;
        $modificar = $conn->prepare('UPDATE VentasProductos SET
        Id_Producto = :idProducto,
        cantidad_producto = :cantidad,
        total_venta = :totalVenta,
        fecha_venta = :fechaVenta
        WHERE Id_Venta = '. $_POST['id-venta']);

        $modificar->bindParam(':idProducto', $idProducto);
        $modificar->bindParam(':cantidad', $cantidad);
        $modificar->bindParam(':totalVenta', $totalVenta);
        $modificar->bindParam(':fechaVenta', $fecha);

        $modificar->execute();
    }

   
    $conn == null;
?>

