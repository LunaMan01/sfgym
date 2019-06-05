<?php 
    include '../conexion.php';
    
    try {
        
        $preparar = 'SELECT Id_Compra, nombre_instructor, fecha_compra, total_compra, tipo_compra 
            FROM Compras INNER JOIN Instructores INNER JOIN TipoCompras
            ON Compras.Id_Instructor = Instructores.Id_Instructor
            AND Compras.Id_TipoCompra = TipoCompras.Id_TipoCompra
            AND cancelada = 0
            WHERE Id_Compra = '.$_POST['id-compra'];
        $compra = new \stdClass();

        foreach ($conn->query($preparar) as $row) {
            $compra->idCompra = $row['Id_Compra'];
            $compra->idInstructor = $row['nombre_instructor'];
            $compra->fechaCompra = $row['fecha_compra'];
            $compra->montoCompra = $row['total_compra'];
            $compra->tipoCompra = $row['tipo_compra'];
        }
        
        $compraJSON = json_encode($compra);
       echo $compraJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>