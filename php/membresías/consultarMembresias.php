<?php 
    include '../conexion.php';

    try{
        $consultar = 'SELECT Membresias.Id_Cliente, nombre_cliente, fecha_inicio, fecha_fin 
        FROM Membresias INNER JOIN Clientes ON Membresias.Id_Cliente = Clientes.Id_Cliente';

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Cliente'].'">'.$row['Id_Cliente'].'</th>'.
                '<td>'.$row['nombre_cliente'].'</td>'.
                '<td>'.$row['fecha_inicio'].'</td>'.
                '<td>'.$row['fecha_fin'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-modal"> delete</i> </td>
            </tr>';
}
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>