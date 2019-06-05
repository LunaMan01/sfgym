<?php 
    include '../conexion.php';

    $fechaActual = date('d/m/Y');

    try{
        $buy = $_POST['compra'];
        $arrayBuy = json_decode($buy, true);

        $items = $_POST['productos'];
        $arrayItems = json_decode($items, true);

        $idIntructor = $arrayBuy['idInstructor'];
        $tipoCompra = $arrayBuy['tipoCompra'];
        $descripcion = $arrayBuy['descripcionCompra'];
        $totalCompra = $arrayBuy['totalCompra'];

        agregarCompra($conn, $idIntructor, $tipoCompra, $descripcion, $totalCompra);


        // if($_POST['compras'] == 1){
        //     agregarProducto($conn);
        //     echo 1;
        // }

        // if($_POST['compras'] == 2){
        //     agregarAparato($conn);
        //     echo 1;
        // }

        // if($_POST['compras'] == 3){
        //     agregarCompra($conn);
        //     echo 1;
        // }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function agregarCompra($conn, $idIntructor, $tipoCompra, $descripcion, $totalCompra){
        global $fechaActual;

        $agregar = $conn->prepare('INSERT INTO Compras (Id_Instructor, Id_TipoCompra, descripcion_compra, monto_compra, fecha_compra) VALUES 
            (:instructor, :tipo, :descripcion, :monto, :fecha)');

        $agregar->bindParam(':instructor', $idIntructor);
        $agregar->bindParam(':tipo', $tipoCompra);
        $agregar->bindParam(':descripcion', $descripcion);
        $agregar->bindParam(':monto', $totalCompra);
        $agregar->bindParam(':fecha', $fechaActual);
        try{
        $agregar->execute();
        
        }catch(PDOException $e){
            echo 'Error: '. $e->getMessage();
        }
    }

    // function actualizarProducto($conn){
    //     agregarCompra($conn);

    //     $compra = $conn->prepare('UPDATE Productos set existencia_producto = :existencia WHERE Id_Producto = :idP');

    //     $compra->bindParam(':existencia', $_POST['cantidad']);
    //     $compra->bindParam(':idP', $_POST['id']);
       

    //     $compra->execute();
    // }

    // function agregarProducto($conn){
    //     agregarCompra($conn);

    //     $compra = $conn->prepare('INSERT INTO Productos (descripcion_producto, fecha_caducidad, existencia_producto, precio_producto)
    //         VALUES (:nombre, :fecha, :existencia, :precio)');

    //     $compra->bindParam(':nombre', $_POST['descripcion-compra']);
    //     $compra->bindParam(':fecha', $_POST['fecha-caducidad']);
    //     $compra->bindParam(':existencia', $_POST['existencia']);
    //     $compra->bindParam(':precio', $_POST['precio-producto']);

    //     $compra->execute();

    //     $productos = $conn->prepare('INSERT INTO ComprasProductos (Id_Compra, Id_Producto, existencia_producto, precio_producto)
    //         VALUES (:nombre, :fecha, :existencia, :precio)');

    //     $productos->bindParam(':nombre', $_POST['descripcion-compra']);
    //     $productos->bindParam(':fecha', $_POST['fecha-caducidad']);
    //     $productos->bindParam(':existencia', $_POST['existencia']);
    //     $productos->bindParam(':precio', $_POST['precio-producto']);

    //     $productos->execute();


    // }

    // function agregarAparato($conn){
    //     agregarCompra($conn);

    //     $aparato = $conn->prepare('INSERT INTO Aparatos (nombre_aparato) 
    //         VALUES (:aparato)');

    //     $aparato->bindParam(':aparato', $_POST['descripcion-compra']);

    //     $aparato->execute();
    // }
    $conn = null;
?>