<?php 
    include '../conexion.php';

    try{
        $consultar = 'SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
        FROM Productos';

        foreach($conn->query($consultar) as $row){
            echo '<option>'.$row['descripcion_producto'].'</option>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>