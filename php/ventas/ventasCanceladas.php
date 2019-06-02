<?php 
    include '../conexion.php';

    $fecha = date('d/m/Y');

    try{
        $datos = "SELECT Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
        FROM Ventas INNER JOIN Clientes
        ON Ventas.Id_Cliente = Clientes.Id_Cliente 
        AND cancelada = 1";
        //$datos->execute();
    
        foreach($conn->query($datos) as $row){
            echo '<tr>
                  <th scope="row" id="'.$row['Id_Venta'].'">'.$row['Id_Venta'].'</th>'.
                 '<td>'.$row['nombre_cliente'].'</td>'.
                 '<td>'.$row['fecha_venta'].'</td>'.
                 '<td class="text-right">'.$row['total_venta'].'</td>'.
            '<td class="text-right">
                <i class="material-icons actions watch-action mr-2" > remove_red_eye</i>
                <i class="material-icons actions edit-venta mr-2" > create</i>
                <i class="material-icons actions delete-venta mr-2" data-toggle="modal" href="#eliminar-venta-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn == null;
?>