<?php
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        $query = $conn->prepare('SELECT Id_Compra, Id_Instructor, descripcion_compra, monto_compra, fecha_compra
        FROM Compras INNER JOIN Instructores ON Compras.Id_Instructor LIKE Instructores.Id_Instructor WHERE 
        Id_Compra LIKE ? OR Id_Instructor LIKE ? OR descripcion_compra LIKE ? OR monto_compra LIKE ? 
        OR fecha_compra LIKE ?');

        $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Compra'].'">'.$results['Id_Compra'].'</th>'.
            '<td>'.$results['Id_Instructor'].'</td>'.
            '<td>'.$results['descripcion_compra'].'</td>'.
            '<td>'.$results['monto_compra'].'</td>'.
            '<td>'.$results['fecha_compra'].'</td>'.
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