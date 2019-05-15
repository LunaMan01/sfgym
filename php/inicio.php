<?php 
    include 'conexion.php';

    try{
        //CLIENTES ACTIVOS
        $active = 1;
        $preparar = 'SELECT COUNT(*) AS Activos FROM clientes WHERE activo = '. $active;
        $resultActivos = $conn->query($preparar); 
        $totalActivos = $resultActivos->fetchColumn();
        
        $inicio = new \stdClass();
        $inicio->activo = $totalActivos;
        
        //VISITAS DEL DIA
        $fecha = date('d/m/Y');
        $visitas = "SELECT COUNT(*) AS Visitas FROM Visitas WHERE fecha_visitas LIKE '". $fecha."'";
        $resultVisitas = $conn->query($visitas);
        $totalVisitas = $resultVisitas->fetchColumn();

        $inicio->visitas = $totalVisitas;

        //NUMERO DE MEMBRESIAS QUE VENCEN HOY
        $membresias = "SELECT COUNT(*) AS Member FROM Membresias WHERE fecha_fin LIKE '". $fecha."'";
        $resultMembresias = $conn->query($membresias);
        $totalMembresias = $resultMembresias->fetchColumn();

        $inicio->membresias = $totalMembresias;

        //DATOS DE LAS MMBRSIAS QUE VENCEN HOY
        $vencer = "SELECT Id_Membresia, nombre_cliente FROM Membresias INNER JOIN Clientes 
        ON Membresias.Id_Cliente LIKE Clientes.Id_Cliente ORDER BY Id_Membresia ASC";
        
        foreach ($conn->query($vencer) as $row) {
            $inicio->idMembresia = $row['Id_Membresia'];
            $inicio->nombreCliente = $row['nombre_cliente'];
        }

        $inicioJSON = json_encode($inicio);
        echo $inicioJSON;

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>