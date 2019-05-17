<?php 
    include '../conexion.php';

    try{
        $consultar = "SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
        FROM Productos WHERE existencia_producto < 5";

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Producto'].'">'.$row['Id_Producto'].'</th>'.
                '<td>'.$row['descripcion_producto'].'</td>'.
                '<td>'.$row['fecha_caducidad'].'</td>'.
                '<td>'.$row['existencia_producto'].'</td>'.
                '<td>'.$row['precio_producto'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>