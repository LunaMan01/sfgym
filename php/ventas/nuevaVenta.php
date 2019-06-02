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

        if($_POST['select-tipo-venta'] == 1){
            foreach($arrayItems as $row){
                ventasProductos($conn, $lastId, $row['id'], $row['cantidad'], $row['subtotal']);
            }
        }

        if($_POST['select-tipo-venta'] == 2){
            foreach($arrayItems as $row){
                ventasMembresias($conn, $lastId, $row['membresia'], $row['total']);
            }
        }

        if($_POST['select-tipo-venta'] == 3){
            foreach($arrayItems as $row){
                ventasVisitas($conn, $lastId, $row['visita'], $row['total']);
            }
        }
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function agregarVentas($conn, $cliente, $instructor, $total){
        global $fecha;
        $venta = $conn->prepare("INSERT INTO Ventas (Id_Cliente, Id_Instructor, fecha_venta, total_venta, cancelada,Id_TipoVenta)
            VALUES (:idCliente, :idInstructor, :fecha, :total, :cancelada, :tipo)");
        $can = 0;
        $venta->bindParam(':idCliente', $cliente);
        $venta->bindParam(':idInstructor', $instructor);
        $venta->bindParam(':fecha', $fecha);
        $venta->bindParam(':total', $total);
        $venta->bindParam(':cancelada', $can);
        $venta->bindParam(':tipo', $_POST['select-tipo-venta']);

        $venta->execute();
    }

    function ventasProductos($conn, $venta, $producto, $cantidad, $total){
        $detalle = $conn->prepare("INSERT INTO VentasProductos (Id_Venta, Id_Producto, cantidad_producto, subtotal_venta)
            VALUES (:idVenta, :idProducto, :cantidad, :subtotal)");

        $detalle->bindParam(':idVenta', $venta);
        $detalle->bindParam(':idProducto', $producto);
        $detalle->bindParam(':cantidad', $cantidad);
        $detalle->bindParam(':subtotal', $total);

        $detalle->execute();
    }

    function ventasMembresias($conn, $idVenta, $idMembresia, $total){
        $membresia = $conn->prepare("INSERT INTO VentasMembresias(Id_Venta, Id_Membresia, total) 
            VALUES(:venta, :membresia, :total)");

        $membresia->bindParam(':venta', $idVenta);
        $membresia->bindParam(':membresia', $idMembresia);
        $membresia->bindParam(':total', $total);

        $membresia->execute();
    }

    function ventasVistas($conn, $idVenta, $idVisita, $total){
        $visitas = $conn->prepare("INSERT INTO VentasVisitas(Id_Venta, Id_Visita, total) 
            VALUES(:venta, :visita, :total)");

        $visitas->bindParam(':venta', $idVenta);
        $visitas->bindParam(':visita', $idVisita);
        $visitas->bindParam(':total', $total);
    }

    $conn == null;
?>