<?php 
    include '../conexion.php';

    $fechaActual = date('d/m/Y');

    try{
        $buy = $_POST['compra'];
        $arrayBuy = json_decode($buy, true);

        $items1 = $_POST['productos-nuevos'];
        $arrayItems1 = json_decode($items1, true);

        // $items2 = $_POST['productos-existentes'];
        // $arrayItems2 = json_decode($items2, true);

        // $items3 = $_POST['aparatos'];
        // $arrayItems3 = json_decode($items3, true);

        $idIntructor = $arrayBuy['idInstructor'];
        $tipoCompra = $arrayBuy['tipoCompra'];
        $totalCompra = $arrayBuy['totalCompra'];

        // $cantidad = $arrayBuy['cantidad'];
        // $aparato = $arrayBuy['aparato'];

        agregarCompra($conn, $idIntructor, $tipoCompra, $totalCompra);

        $lastIdCompra = $conn->lastInsertId();

        //TIPO DE COMPRA
        //PRODUCTOS
        if($tipoCompra == 1){
            
            //CATEGORIA
            //PRODUCTOS NUEVOS
            // if($_POST['compras'] == 1){
            //     foreach($arrayItems1 as $row){
            //         comprasProductosNuevos($conn, $lastIdCompra, $row['descripcion'], $row['fecha-caducidad'], $row['existencia'], $row['precio'], $row['subtotal']);
            //     }
            //     echo 1;
            // }

            // //PRODUCTOS EXISTENTES
            // if($_POST['compras'] == 2){
            //     foreach($arrayItems2 as $row){
            //         comprasProductosExistentes($conn, $lastIdCompra, $row['id'], $row['existencia'], $row['subtotal']);
            //     }
            //     echo 1;
            // }

            foreach($arrayItems1 as $row){
                if($row['categoria'] == 1){
                    comprasProductosNuevos($conn, $lastIdCompra, $row['descripcion'], $row['caducidad'], $row['existencia'], $row['precioVenta'], $row['subtotal']);
                }

                if($row['categoria'] == 2){
                    //comprasProductosExistentes($conn, $lastIdCompra, $row['id'], $row['existencia'], $row['subtotal']);
                    echo 0;
                }
            }
        }

        //APARATOS
        if($tipoCompra == 2){
            foreach($arrayItems3 as $row){
                comprasAparatos($conn, $lastIdCompra, $row['descripcion'], $row['subtotal']);
            }
            echo 1;
        }

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function agregarCompra($conn, $idIntructor, $tipoCompra, $totalCompra){
        global $fechaActual;
        try{
        $agregar = $conn->prepare('INSERT INTO Compras (Id_Instructor, Id_TipoCompra, total_compra, fecha_compra, cancelada) VALUES 
            (:instructor, :tipo, :total, :fecha, 0)');

        $agregar->bindParam(':instructor', $idIntructor);
        $agregar->bindParam(':tipo', $tipoCompra);
        $agregar->bindParam(':total', $totalCompra);
        $agregar->bindParam(':fecha', $fechaActual);
        
        $agregar->execute();
        
        }catch(PDOException $e){
            echo 'Error: '. $e->getMessage();
        }
    }

    function comprasProductosNuevos($conn, $lastIdCompra, $descripcion, $fechaCaducidad, $existenciaProducto, $precioProducto, $subtotal){
        $producto = $conn->prepare('INSERT INTO Productos (descripcion_producto, fecha_caducidad, existencia_producto, precio_producto)
            VALUES (:nombre, :fecha, :existencia, :precio)');
    
        $producto->bindParam(':nombre', $descripcion);
        $producto->bindParam(':fecha', $fechaCaducidad);
        $producto->bindParam(':existencia', $existenciaProducto);
        $producto->bindParam(':precio', $precioProducto);

        $producto->execute();

        $lastIdProducto = $conn->lastInsertId();

        $compra = $conn->prepare('INSERT INTO ComprasProductos (Id_Compra, Id_Producto, total)
            VALUES (:compra, :producto, :subtotal)');
        
        $compra->bindParam(':compra', $lastIdCompra);
        $compra->bindParam(':producto', $lastIdProducto);
        $compra->bindParam(':subtotal', $subtotal);

        $compra->execute();
    }

    function comprasProductosExistentes($conn, $lastIdCompra, $idProducto, $existencia, $subtotal){
        $compra = $conn->prepare('UPDATE Productos SET 
            existencia_producto = :existencia
            WHERE Id_Producto = '. $idProducto);

        $compra->bindParam(':existencia', $existencia);

        $compra->execute();

        $productos = $conn->prepare('INSERT INTO ComprasProductos (Id_Compra, Id_Producto, total)
            VALUES (:compra, :producto, :subtotal)');

        $productos->bindParam(':compra', $lastIdCompra);
        $productos->bindParam(':producto', $idProducto);
        $productos->bindParam(':subtotal', $subtotal);

        $productos->execute();
    }

    function comprasAparatos($conn, $lastIdCompra, $descripcion){
        $aparato = $conn->prepare('INSERT INTO Aparatos (nombre_aparato) 
            VALUES (:aparato)');

        $aparato->bindParam(':aparato', $descripcion);

        $aparato->execute();

        $lastIdAparato = $conn->lastInsertId();

        $compra = $conn->prepare('INSERT INTO ComprasAparatos (Id_Compra, Id_Aparato, total)
            VALUES (:compra, :aparato, :total)');

        $compras->bindParam(':compra', $lastIdCompra);
        $compras->bindParam(':aparato', $lastIdAparato);
        $compras->bindParam(':total', $descripcion);
    }
    $conn = null;
?>