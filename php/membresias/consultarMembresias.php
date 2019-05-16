<?php 
    include '../conexion.php';

    date_default_timezone_set('America/Mexico_City');

    try{
        $consultar = 'SELECT Id_Membresia, nombre_cliente, fecha_inicio, fecha_fin 
        FROM Membresias INNER JOIN Clientes ON Membresias.Id_Cliente = Clientes.Id_Cliente';

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Membresia'].'">'.$row['Id_Membresia'].'</th>'.
                '<td>'.$row['nombre_cliente'].'</td>'.
                '<td>'.$row['fecha_inicio'].'</td>'.
                '<td>'.$row['fecha_fin'].'</td>'.
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