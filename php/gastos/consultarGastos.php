<?php 
    include '../conexion.php';

    try{
        $consultar = 'SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto 
        FROM Gastos';

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Gasto'].'">'.$row['Id_Gasto'].'</th>'.
                '<td>'.$row['descripcion_gasto'].'</td>'.
                '<td>'.$row['fecha_gasto'].'</td>'.
                '<td>'.$row['monto_gasto'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-membresia-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-membresia-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>