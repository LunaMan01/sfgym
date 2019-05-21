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

        $deleteItems = $_POST['eliminados'];
        $arrayDelete = json_decode($deleteItems, true);

        
        foreach($arrayDelete as $row){
            eliminarProductos($conn, $row['id'], $_POST['id-venta']);
        }

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
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, subtotal_venta)
        VALUES (:idVenta, :idProducto, :cantidad, :subtotal)");

        $detalle->bindParam(':idVenta', $_POST['id-venta']);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':subtotal', $total);

        $detalle->execute(); 
    }

    function modificarProductos($conn, $idProducto, $cantidad, $totalVenta){
        $modificar = $conn->prepare('UPDATE VentasProductos SET
        Id_Producto = :idProducto,
        cantidad_producto = :cantidad,
        subtotal_venta = :subtotalVenta
        WHERE Id_Venta = '. $_POST['id-venta'].' AND Id_Producto = '. $idProducto);

        $modificar->bindParam(':idProducto', $idProducto);
        $modificar->bindParam(':cantidad', $cantidad);
        $modificar->bindParam(':subtotalVenta', $totalVenta);

        $modificar->execute();

        $cantidadTotal = 0;

        $busqueda = $conn->prepare("SELECT existencia_producto FROM Productos");
        $busqueda->execute();
        $resultado = $busqueda->fetchAll();

        foreach($resultado as $row){
            $cantidadTotal = $row['existencia_producto'];
        } 

        $productos = $conn->prepare("UPDATE Productos SET
            existencia_producto = :cantidad
            WHERE Id_Producto = ". $idProducto);

        $resta = $cantidadTotal-$cantidad;
        $productos->bindParam(':cantidad', $resta);

        $productos->execute();
    }

    function eliminarProductos($conn, $idProducto, $idVenta){
        $eliminar = $conn->prepare("DELETE FROM VentasProductos
            WHERE Id_Producto = ".$idProducto." AND Id_Venta = ".$idVenta);
        
        $eliminar->execute();
    }

   
    $conn == null;
?>

