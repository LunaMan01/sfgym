<?php 
    include '../conexion.php';

    try{
        $consulta = "SELECT Ventas.Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
            FROM Clientes INNER JOIN Ventas INNER JOIN VentasProductos 
            ON Ventas.Id_Venta = VentasProductos.Id_Venta 
            AND Clientes.Id_Cliente = Ventas.Id_Cliente 
            WHERE Ventas.Id_Venta = ". $_POST['id-venta'];

        $venta = new \stdClass();

        foreach ($conn->query($consulta) as $row) {
            $venta->idVenta = $row['Id_Venta'];
            $venta->nombreCliente = $row['nombre_cliente'];
            $venta->fechaVenta = $row['fecha_venta'];
            $venta->totalVenta = $row['total_venta'];
        }
        
        $ventaJSON = json_encode($venta);
        echo $ventaJSON;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>