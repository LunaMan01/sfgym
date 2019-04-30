<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        $query = $conn->prepare('SELECT Id_Aparato, nombre_aparato
        FROM Aparatos WHERE 
        Id_Aparato LIKE ? OR nombre_aparato LIKE ?');

        $query->execute(array($dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Aparato'].'">'.$results['Id_Aparato'].'</th>'.
            '<td>'.$results['nombre_aparato'].'</td>'.
            '<td>
                <i class="material-icons actions mr-2"  watch-action data-toggle="modal" href="#ver-membresia-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-membresia-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>