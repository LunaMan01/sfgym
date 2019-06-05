<?php 
    include '../conexion.php';

    $fecha = date('d/m/Y');

    try{
        $membresia = $conn->prepare('INSERT INTO Membresias (Id_Cliente, fecha_inicio, fecha_fin) 
        VALUES(:ID, :inicio, :fin)');

        $membresia->bindParam(':ID', $_POST['id-cliente']);
        $membresia->bindParam(':inicio', $_POST['inicio']);
        $membresia->bindParam(':fin', $_POST['fin']);

        $membresia->execute();

        $venta = $conn->prepare("INSERT INTO Ventas (Id_Cliente, Id_Instructor, fecha_venta, total_venta, cancelada)
            VALUES (:idCliente, :idInstructor, :fecha, :total, :cancelada)");
        $can = 0;
        $venta->bindParam(':idCliente', $_POST['id-cliente']);
        $venta->bindParam(':idInstructor', $_POST['id-instructor']);
        $venta->bindParam(':fecha', $fecha);
        $venta->bindParam(':total', $_POST['total-venta']);
        $venta->bindParam(':cancelada', $can);

        $venta->execute();
        echo 1;
    }catch(PDOException $e){
        echo "Error: " .$e->getMessage();
    }
    $conn = null;
?>