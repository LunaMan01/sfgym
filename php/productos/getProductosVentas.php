<?php 
    include '../conexion.php';

    try{
        $consultar = 'SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
        FROM Productos';
  
        $productos =  array();
        $i = 0;
        foreach($conn->query($consultar) as $row){
            $producto = new \stdClass();
            $producto->idProducto = $row['Id_Producto'];
            $producto->descripcionProducto = $row['descripcion_producto'];
            $producto->precioProducto = $row['precio_producto'];
            $productos[$i] = $producto;
            $i++;
        }

        $productosJSON = json_encode($productos);
        echo $productosJSON;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>