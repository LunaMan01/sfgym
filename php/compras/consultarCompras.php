<?php 
    include '../conexion.php';

    try{
        $consulta = 'SELECT Id_Compra, Id_Instrcutor, descripcion_compra, monto_compra, fecha_compra
        FROM Compras INNER JOIN Instructores ON Compras.Id_Instructor = Instructores.Id_Instructor';

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Compra'].'">'.$row['Id_Compra'].'</th>'.
                '<td>'.$row['Id_Instructor'].'</td>'.
                '<td>'.$row['descripcion_compra'].'</td>'.
                '<td>'.$row['monto_compra'].'</td>'.
                '<td>'.$row['fecha_compra'].'</td>'.
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