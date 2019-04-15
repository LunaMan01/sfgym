<?php
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        $query = $conn->prepare('SELECT Clientes.Id_Cliente, nombre_cliente, numero
        FROM Clientes INNER JOIN Telefonos ON Clientes.Id_Cliente LIKE Telefonos.Id_Cliente WHERE 
        Clientes.Id_Cliente LIKE ? OR nombre_cliente LIKE ? OR numero LIKE ?');

        $query->execute(array($dato."%", $dato."%", $dato."%"));

        while($results = $query->fetch()){
            echo '<tr>
            <th scope="row" id="'.$results['Id_Cliente'].'">'.$results['Id_Cliente'].'</th>'.
            '<td>'.$results['nombre_cliente'].'</td>'.
            '<td>'.$results['numero'].'</td>'.
            '<td>
                <i class="material-icons actions mr-2"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-modal"> delete</i> </td>
            </tr>';
        }

        /*$busqueda = $conn->prepare('SELECT Clientes.Id_Cliente, nombre_cliente, numero 
        FROM Clientes, Telefonos WHERE Clientes.Id_Cliente LIKE ? OR nombre_cliente LIKE ? OR numero LIKE ?');

        $busqueda->bindValue(1, "{$dato}%", PDO::PARAM_STR);
        $busqueda->bindValue(2, "{$dato}%", PDO::PARAM_STR);
        $busqueda->bindValue(3, "{$dato}%", PDO::PARAM_STR);

        $busqueda->execute();

        $busqueda1 = $busqueda->fetchAll();
        
        if(count($busqueda1) > 0){
            foreach($busqueda1 as $results){
                echo '<tr>
                <th scope="row" id="'.$results['Id_Cliente'].'">'.$results['Id_Cliente'].'</th>'.
                '<td>'.$results['nombre_cliente'].'</td>'.
                '<td>'.$results['numero'].'</td>'.
                '<td>
                    <i class="material-icons actions mr-2"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-modal"> delete</i> </td>
                </tr>';
            }
        }*/
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>
<!-- SELECT Clientes.Id_Cliente, nombre_cliente, numero FROM Clientes, Telefonos WHERE Clientes.Id_Cliente = 63 AND Telefonos.Id_Cliente = 63; -->

<!-- SELECT Clientes.Id_Cliente, nombre_cliente, numero 
        FROM Clientes, Telefonos WHERE nombre_cliente ='b' OR apellido_paterno = 'b' OR numero = 'b' -->