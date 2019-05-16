<?php
    include '../conexion.php';

    $array = array();
    try {
        
        $preparar = 'SELECT * FROM Productos WHERE Id_Producto = '.$_POST['id-producto'];
        $producto = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $producto->idProducto = $row['Id_Producto'];
            $producto->descripcionProducto = $row['descripcion_producto'];
            $producto->precioProducto = $row['precio_producto'];
            $producto->fechaCaducidad = $row['fecha_caducidad'];
            $producto->existenciaProducto = $row['existencia_producto'];
        }
        
        $productoJSON = json_encode($producto);
       echo $productoJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>
