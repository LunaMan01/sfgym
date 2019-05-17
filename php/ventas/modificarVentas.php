<?php 
    include '../conexion.php';

    try{
        $sell = $_POST['venta'];
        $arraySell = json_decode($sell, true);

        $items = $_POST['productos'];
        $arrayItems = json_decode($items, true);

        modificarVenta($conn, $arraySell['nipCliente'], $arraySell['idInstructor'], $arraySell['totalVenta']);

        foreach($arrayItems as $row){
            detalleVenta($conn, $row['id'], $row['cantidad'], $row['subtotal'], $row['fecha']);
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function modificarVenta($conn, $cliente, $instructor, $subtotal){
        $modificar = $conn->prepare('UPDATE Ventas SET
        Id_Cliente = :idClinte,
        Id_Instructor = :idInstructor,
        total_venta = :subtotal 
        WHERE Id_Venta = '. $_POST['id-venta']);

        $modificar->bindParam(':idCliente', $cliente);
        $modificar->bindParam(':idInstructor', $instructor);
        $modificar->bindParam(':subtotal', $subtotal);

        $modificar->execute();
    }

    function modificarProductos($conn, $idProducto, $cantidad, $totalVenta, $fechaVenta){
        $modificar = $conn->prepare('UPDATE VentasProductos SET
        Id_Producto = :idProducto,
        cantidad_producto = :cantidad,
        total_venta = :totalVenta,
        fecha_venta = :fechaVenta
        WHERE Id_Venta = '. $_POST['id-venta']);

        $modificar->bindParam(':idProducto', $idProducto);
        $modificar->bindParam(':cantidad', $cantidad);
        $modificar->bindParam(':totalVenta', $totalVenta);
        $modificar->bindParam(':fechaVenta', $fechaVenta);

        $modificar->execute();
    }
    $conn == null;
?>