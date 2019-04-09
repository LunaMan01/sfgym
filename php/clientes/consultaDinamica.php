<?php
    include 'conexion.php';

    try{
        $busqueda = $conn->query('SELECT Clientes.Id_Cliente, nombre_cliente, numero 
        FROM Clientes, Telefonos WHERE Clientes.Id_Cliente ='. $_POST['dato'] .' OR Telefonos.Id_Cliente ='. $_POST['dato'] .
        'OR numero='. $_POST['dato'] .'OR nombre_cliente ='. $_POST['dato'] .'OR apellido_paterno ='. $_POST['dato'].
        'OR apellido_materno ='. $_POST['dato']. 'OR edad='. $_POST['dato'] .'OR activo ='. $_POST['dato'] .
        'OR Id_Genero ='. $_POST['dato'] .
        '');

        foreach ($busqueda as $row){
            //tabla
        }
        //$busqueda->execute();

    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>
<!-- SELECT Clientes.Id_Cliente, nombre_cliente, numero FROM Clientes, Telefonos WHERE Clientes.Id_Cliente = 63 AND Telefonos.Id_Cliente = 63; -->