<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        $query = $conn->prepare('SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto
        FROM Productos WHERE 
        Id_Producto LIKE ? OR descripcion_producto LIKE ? OR fecha_caducidad LIKE ? OR existencia_producto LIKE ?');

        $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Producto'].'">'.$results['Id_Producto'].'</th>'.
            '<td>'.$results['descripcion_producto'].'</td>'.
            '<td>'.$results['fecha_caducidad'].'</td>'.
            '<td>'.$results['existencia_producto'].'</td>'.
            '<td>
                <i class="material-icons actions mr-2" watch-action data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>