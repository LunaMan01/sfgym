<?php 
    include '../conexion.php';

    $fechaActual = date('d/m/Y');

    try{
        if($_POST['compras'] == 1){
            agregarProducto($conn);
            echo 1;
        }

        if($_POST['compras'] == 2){
            agregarAparato($conn);
            echo 1;
        }

        if($_POST['compras'] == 3){
            agregarCompra($conn);
            echo 1;
        }

        if($_POST['compras'] == 4){
            actualizarProducto($conn);
            echo 1;
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function actualizarProducto($conn){
        agregarCompra($conn);

        $compra = $conn->prepare('UPDATE Productos set existencia_producto = :existencia WHERE Id_Producto = :idP');

        $compra->bindParam(':existencia', $_POST['cantidad']);
        $compra->bindParam(':idP', $_POST['id']);
       

        $compra->execute();
    }

    function agregarProducto($conn){
        agregarCompra($conn);

        $compra = $conn->prepare('INSERT INTO Productos (descripcion_producto, fecha_caducidad, existencia_producto, precio_producto)
        VALUES (:nombre, :fecha, :existencia, :precio)');

        $compra->bindParam(':nombre', $_POST['descripcion-compra']);
        $compra->bindParam(':fecha', $_POST['fecha-caducidad']);
        $compra->bindParam(':existencia', $_POST['existencia']);
        $compra->bindParam(':precio', $_POST['precio-producto']);

        $compra->execute();
    }

    function agregarAparato($conn){
        agregarCompra($conn);

        $aparato = $conn->prepare('INSERT INTO Aparatos (nombre_aparato) 
            VALUES (:aparato)');

        $aparato->bindParam(':aparato', $_POST['descripcion-compra']);

        $aparato->execute();
    }

    function agregarCompra($conn){
        global $fechaActual;

        $agregar = $conn->prepare('INSERT INTO Compras (Id_Instructor, Id_TipoCompra, descripcion_compra, monto_compra, fecha_compra) VALUES 
            (:instructor, :tipo, :descripcion, :monto, :fecha)');

        $agregar->bindParam(':instructor', $_POST['id-instructor']);
        $agregar->bindParam(':tipo', $_POST['compras']);
        $agregar->bindParam(':descripcion', $_POST['descripcion-compra']);
        $agregar->bindParam(':monto', $_POST['monto-compra']);
        $agregar->bindParam(':fecha', $fechaActual);
        try{
        $agregar->execute();
        
        }catch(PDOException $e){
            echo 'Error: '. $e->getMessage();
        }
    }
    $conn = null;
?>