<?php 
    include '../conexion.php';

    date_default_timezone_set('America/Mexico_City');
    $fecha = date('d/m/Y');

    try{
        $consultar = "SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
        FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo
        AND fecha_gasto LIKE '".$fecha."'";

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Gasto'].'">'.$row['Id_Gasto'].'</th>'.
                '<td>'.$row['descripcion_gasto'].'</td>'.
                '<td>'.$row['monto_gasto'].'</td>'.
                '<td>'.$row['fecha_gasto'].'</td>'.
                '<td>'.$row['tipo_gasto'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>