<?php
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        $query = $conn->prepare('SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto
        FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo WHERE 
        Id_Gasto LIKE ? OR descripcion_gasto LIKE ? OR fecha_gasto LIKE ? OR monto_gasto LIKE ? OR tipo_gasto LIKE ?');

        $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Gasto'].'">'.$results['Id_Gasto'].'</th>'.
            '<td>'.$results['descripcion_gasto'].'</td>'.
            '<td>'.$results['monto_gasto'].'</td>'.
            '<td>'.$results['fecha_gasto'].'</td>'.
            '<td>'.$results['tipo_gasto'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2"  data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>