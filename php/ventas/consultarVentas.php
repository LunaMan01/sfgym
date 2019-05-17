<?php 
    include '../conexion.php';

    try{
        $consultar = "SELECT VentasProductos.Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
        FROM Ventas INNER JOIN Clientes INNER JOIN VentasProductos 
        ON Ventas.Id_Cliente = Clientes.Id_Cliente 
        AND VentasProductos.Id_Venta = Ventas.Id_Venta";

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Venta'].'">'.$row['Id_Venta'].'</th>'.
                    '<td>'.$row['nombre_cliente'].'</td>'.
                    '<td>'.$row['fecha_venta'].'</td>'.
                    '<td>'.$row['total_venta'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn == null;
?>