<?php 
    include '../conexion.php';

    try{
        $consultar = 'SELECT Id_Aparato, nombre_aparato
        FROM Aparatos';

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Aparato'].'">'.$row['Id_Aparato'].'</th>'.
                '<td>'.$row['nombre_aparato'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-aparato-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-aparato-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-aparato-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>