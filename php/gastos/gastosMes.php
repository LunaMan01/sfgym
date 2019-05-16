<?php 
    include '../conexion.php';

    $fecha = date('d/m/Y');

    $mes = date('m');
    $año = date('Y');

    $firstDay = primerDia($mes,$año);
    $lastDay = ultimoDia($mes,$año);

    try{
        $consultar = "SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
        FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo
        AND str_to_date(fecha_gasto, '%d/%m/%Y') 
        BETWEEN str_to_date('".$firstDay."/".$mes."/".$año."', '%d/%m/%Y') 
        AND str_to_date('".$lastDay."/".$mes."/".$año."', '%d/%m/%Y')";

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

    function primerDia($mes, $año){
        return date("d", mktime(0,0,0, $mes, 1, $año));
    }

    function ultimoDia($mes, $año){
        return date("d",(mktime(0,0,0, $mes+1, 1, $año)-1));
    }
    $conn = null;
?>