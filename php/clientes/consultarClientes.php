<?php
    include '../conexion.php';

    $datos = 'SELECT Clientes.Id_Cliente, nombre_cliente, numero FROM Clientes, Telefonos where Telefonos.Id_Cliente = Clientes.Id_Cliente';
    //$datos->execute();

    foreach($conn->query($datos) as $row){
        echo '<tr>
              <th scope="row" id="'.$row['Id_Cliente'].'">'.$row['Id_Cliente'].'</th>'.
             '<td>'.$row['nombre_cliente'].'</td>'.
             '<td>'.$row['numero'].'</td>'.
        '<td>
            <i class="material-icons actions watch-action mr-2"> remove_red_eye</i>
            <i class="material-icons actions edit-action mr-2"> create</i>
            <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-modal"> delete</i> </td>
        </tr>';
    }

    $conn = null;
?>