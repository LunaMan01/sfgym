<?php 
    include '../conexion.php';

    try{
        // $consultar = "SELECT VentasProductos.Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
        // FROM Ventas INNER JOIN Clientes 
        // ON Ventas.Id_Cliente = Clientes.Id_Cliente";

        $consultar = "SELECT Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
        FROM Ventas INNER JOIN Clientes
        ON Ventas.Id_Cliente = Clientes.Id_Cliente";

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Venta'].'">'.$row['Id_Venta'].'</th>'.
                    '<td>'.$row['nombre_cliente'].'</td>'.
                    '<td>'.$row['fecha_venta'].'</td>'.
                    '<td>'.$row['total_venta'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2"> remove_red_eye</i>
                    <i class="material-icons actions edit-venta mr-2"> create</i>
                    <i class="material-icons actions delete-venta mr-2" data-toggle="modal" href="#eliminar-venta-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn == null;
?>