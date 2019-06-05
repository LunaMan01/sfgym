<?php 
    include '../conexion.php';

    try{
        $consulta = 'SELECT Productos.Id_Producto, descripcion_producto, total
        FROM ComprasProductos INNER JOIN Productos INNER JOIN Compras
        ON Productos.Id_Producto = ComprasProductos.Id_Producto
        AND ComprasProductos.Id_Compra = Compras.Id_Compra';

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Producto'].'">'.$row['Id_Producto'].'</th>'.
                '<td>'.$row['descripcion_producto'].'</td>'.
                '<td>'.$row['total'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-compra-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-compra-modal"> create</i>
                
            </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>