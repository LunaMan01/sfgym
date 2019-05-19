<?php 
    include '../conexion.php';

    try{
        $modificar = $conn->prepare('UPDATE Gastos SET
        descripcion_gasto = :descripcion,
        monto_gasto = :monto,
        fecha_gasto = :fecha,
        Id_Tipo = :tipo
        WHERE Id_Gasto = '. $_POST['id-gasto']);

        $modificar->bindParam(':descripcion', $_POST['descripcion-gasto']);
        $modificar->bindParam(':monto', $_POST['monto-gasto']);
        $modificar->bindParam(':fecha', $_POST['fecha-gasto']);
        $modificar->bindParam(':tipo', $_POST['tipo-gasto']);

        $modificar->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>