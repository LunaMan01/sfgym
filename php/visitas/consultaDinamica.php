<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];
    
    try{
        $query = $conn->prepare('SELECT Id_Visita, nombre_cliente, fecha_visitas
        FROM Visitas INNER JOIN Clientes ON Clientes.Id_Cliente LIKE Visitas.Id_Cliente WHERE 
        Id_Visita LIKE ? OR nombre_cliente LIKE ? OR fecha_visitas LIKE ?');

        $query->execute(array($dato."%", $dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Visita'].'">'.$results['Id_Visita'].'</th>'.
            '<td>'.$results['nombre_cliente'].'</td>'.
            '<td>'.$results['fecha_visitas'].'</td>'.
            '<td>
                <i class="material-icons actions mr-2" data-toggle="modal" href="#ver-membresia-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-membresia-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>
