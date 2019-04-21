<?php 
    include '../conexion.php';
    
    try{
        $datos = 'SELECT Id_Visita, nombre_cliente, fecha_visita FROM Visitas, Clientes 
        WHERE Visitas.Id_Cliente = Clientes.Id_Cliente';
        //$datos->execute();
    
        foreach($conn->query($datos) as $row){
            echo '<tr>
                  <th scope="row" id="'.$row['Id_Visita'].'">'.$row['Id_Visita'].'</th>'.
                 '<td>'.$row['nombre_cliente'].'</td>'.
                 '<td>'.$row['fecha_visita'].'</td>'.
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