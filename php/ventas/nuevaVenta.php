<?php 
    include '../conexion.php';
    
    $fecha = date('d/m/Y');

    try{
        $sell = $_POST['venta'];
        $arraySell = json_decode($sell, true);

        $items = $_POST['productos'];
        $arrayItems = json_decode($items, true);

        $cliente = $arraySell['nipCliente'];
        $instructor = $arraySell['idInstructor'];
        $totalVenta = $arraySell['totalVenta'];
        $fechaFin = $arraySell['fecha-fin'];

        agregarVentas($conn, $cliente, $instructor, $totalVenta);

        $lastIdVenta = $conn->lastInsertId();

        if($_POST['select-tipo-venta'] == 1){
            foreach($arrayItems as $row){
                ventasProductos($conn, $lastIdVenta, $row['id'], $row['cantidad'], $row['subtotal']);
            }
        }

        if($_POST['select-tipo-venta'] == 2){
            ventasMembresias($conn, $cliente, $fechaFin, $lastIdVenta, $totalVenta);
        }

        if($_POST['select-tipo-venta'] == 3){
            ventasVisitas($conn, $cliente, $lastIdVenta, $totalVenta);
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

    function ventasMembresias($conn, $idCliente, $fechaFin, $idVenta, $total){
        global $fecha;
        
        $membresia = $conn->prepare('INSERT INTO Membresias (Id_Cliente, fecha_inicio, fecha_fin) 
            VALUES(:ID, :inicio, :fin)');

        $membresia->bindParam(':ID', $idCliente);
        $membresia->bindParam(':inicio', $fecha);
        $membresia->bindParam(':fin', $fechaFin);

        $membresia->execute();

        $lastIdMembresia = $conn->lastInsertId();

        $añadir = $conn->prepare("INSERT INTO VentasMembresias(Id_Venta, Id_Membresia, total) 
            VALUES(:venta, :membresia, :total)");

        $añadir->bindParam(':venta', $idVenta);
        $añadir->bindParam(':membresia', $lastIdMembresia);
        $añadir->bindParam(':total', $total);

        $añadir->execute();
    }

    function ventasVisitas($conn, $idCliente, $idVenta, $total){
        global $fecha;

        $añadir = $conn->prepare('INSERT INTO Visitas (fecha_visitas, Id_Cliente) 
            VALUES (:fecha, :ID)');

        $añadir->bindParam(':fecha', $fecha);
        $añadir->bindParam(':ID', $idCliente);
        $añadir->execute();

        $lastIdVisita = $conn->lastInsertId();

        $visitas = $conn->prepare("INSERT INTO VentasVisitas(Id_Venta, Id_Visita, total) 
            VALUES(:venta, :visita, :total)");

        $visitas->bindParam(':venta', $idVenta);
        $visitas->bindParam(':visita', $lastIdVisita);
        $visitas->bindParam(':total', $total);

        $visitas->execute();
    }

    $conn == null;
?>