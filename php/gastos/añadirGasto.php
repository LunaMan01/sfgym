<?php 
    include '../conexion.php';

    try{

        $type = tipoGasto();
        
        $añadir = $conn->prepare('INSERT INTO Gastos (descripcion_gasto, monto_gasto, fecha_gasto, Id_Tipo) VALUES 
        (:descripcion, :monto, :fecha, :tipo)');
        
        $añadir->bindParam(':descripcion', $_POST['descripcion-gasto']);
        $añadir->bindParam(':monto', $_POST['monto-gasto']);
        $añadir->bindParam(':fecha', $_POST['fecha-gasto']);
        $añadir->bindParam(':tipo', $type);
        
        $añadir->execute();
        echo 1;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;

    function tipoGasto(){
        if(in_array('1', $_POST['tipo-gasto'])){
            $tipo = 1;
        }
        
        if(in_array('2', $_POST['tipo-gasto'])){
            $tipo = 2;
        }

        if(in_array('3', $_POST['tipo-gasto'])){
            $tipo = 3;
        }
        return $tipo;
    }
?>