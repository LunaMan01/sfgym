<?php 
    include '../conexion.php';

    try{
        $tipo = $_POST['tipo-venta'];

        if($tipo == 1){
            datosProductos($conn);
        }

        if($tipo == 2){
            datosMembresias($conn);
        }

        if($tipo == 3){
            datosVisitas($conn);
        }
        
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function datosProductos($conn){
        $consulta = "SELECT Ventas.Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta, Ventas.Id_Cliente, Instructores.Id_Instructor, tipo_venta
            FROM Clientes INNER JOIN Ventas INNER JOIN VentasProductos INNER JOIN TipoVenta INNER JOIN Instructores
            ON Ventas.Id_Venta = VentasProductos.Id_Venta 
            AND Clientes.Id_Cliente = Ventas.Id_Cliente 
            AND Ventas.Id_Instructor = Instructores.Id_Instructor
            WHERE Ventas.Id_Venta = ".$_POST['id-venta'];

        $venta = new \stdClass();

        foreach ($conn->query($consulta) as $row) {
            $venta->idVenta = $row['Id_Venta'];
            $venta->idCliente = $row['Id_Cliente'];
            $venta->nombreCliente = $row['nombre_cliente'];
            $venta->fechaVenta = $row['fecha_venta'];
            $venta->totalVenta = $row['total_venta'];
            $venta->idInstructor = $row['Id_Instructor'];
            $venta->tipoVenta = $row['tipo_venta'];
        }
        
        $ventaJSON = json_encode($venta);
        echo $ventaJSON;
    }

    function datosMembresias($conn){
        $consulta = "SELECT Id_Venta, Clientes.Id_Cliente, Id_Membresia, nombre_cliente, fecha_inicio, fecha_fin, total_venta, Id_Membresia, Instructores.Id_Instructor
            FROM Clientes INNER JOIN Ventas INNER JOIN Membresias INNER JOIN Instructores
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            AND Clientes.Id_Cliente = Membresias.Id_Cliente
            AND Ventas.Id_Instructor = Instructores.Id_Instructor
            WHERE Ventas.Id_Venta = ". $_POST['id-venta'];

        $membresia = new \stdClass();

        foreach ($conn->query($consulta) as $row) {
            $membresia->idVenta = $row['Id_Venta'];
            $membresia->idCliente = $row['Id_Cliente'];
            $membresia->nombreCliente = $row['nombre_cliente'];
            $membresia->fechaInicio = $row['fecha_inicio'];
            $membresia->fechaFin = $row['fecha_fin'];
            $membresia->idMembresia = $row['Id_Membresia'];
            $membresia->totalVenta = $row['total_venta'];
            $membresia->idInstructor = $row['Id_Instructor'];
        }
        
        $membresiaJSON = json_encode($membresia);
        echo $membresiaJSON;
    }

    function datosVisitas($conn){
        $consulta = "SELECT Id_Venta, Clientes.Id_Cliente, nombre_cliente, fecha_visitas, total_venta, Id_Visita, Instructores.Id_Instructor
            FROM Clientes INNER JOIN Ventas INNER JOIN Visitas INNER JOIN Instructores
            ON Clientes.Id_Cliente = Ventas.Id_Cliente 
            AND Clientes.Id_Cliente = Visitas.Id_Cliente
            AND Ventas.Id_Instructor = Instructores.Id_Instructor
            WHERE Ventas.Id_Venta = ". $_POST['id-venta'];

        $visita = new \stdClass();

        foreach ($conn->query($consulta) as $row) {
            $visita->idVenta = $row['Id_Venta'];
            $visita->idCliente = $row['Id_Cliente'];
            $visita->nombreCliente = $row['nombre_cliente'];
            $visita->fechaVisita = $row['fecha_visitas'];
            $visita->idVisita = $row['Id_Visita'];
            $visita->totalVenta = $row['total_venta'];
            $visita->idInstructor = $row['Id_Instructor'];
        }
        
        $visitaJSON = json_encode($visita);
        echo $visitaJSON;
    }
    $conn = null;
?>