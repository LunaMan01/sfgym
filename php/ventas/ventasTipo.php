<?php 
    include '../conexion.php';

    try{
        $datos = "SELECT Id_Venta, nombre_cliente, fecha_venta, TipoVenta.tipo_venta, total_venta, TipoVenta.Id_TipoVenta
            FROM Clientes INNER JOIN Ventas INNER JOIN TipoVenta
            ON Clientes.Id_Cliente = Ventas.Id_Cliente AND Ventas.Id_TipoVenta = TipoVenta.Id_TipoVenta
            WHERE Ventas.Id_TipoVenta = ". $_POST['tipo-venta'] ." AND cancelada = 0";

        foreach($conn->query($datos) as $row){
            echo '<tr>
                    <th scope="row" data-tipo="'.$row['Id_TipoVenta'].'" id="'.$row['Id_Venta'].'">'.$row['Id_Venta'].'</th>'.
                    '<td>'.$row['nombre_cliente'].'</td>'.
                    '<td>'.$row['fecha_venta'].'</td>'.
                    '<td>'.$row['tipo_venta'].'</td>'.
                    '<td class="text-right">'.$row['total_venta'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2"> remove_red_eye</i>
        
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-venta-modal"> delete</i> 
                    </td>
                </tr>';
        }

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>