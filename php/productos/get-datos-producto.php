<?php
    include '../conexion.php';
    $conex = $conn;
    $array = array();
    try {
        
        $preparar = 'SELECT * FROM Productos where Id_Producto = '.$_POST['id'];
        $producto = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $producto->idProducto = $row['Id_Producto'];
            $producto->descripcionProducto = $row['descripcion-productos'];
            $producto->precioProducto = $row['precio_producto'];
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
