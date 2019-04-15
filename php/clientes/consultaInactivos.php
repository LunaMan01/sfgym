<?php 
    include '../conexion.php';

    try{
        $inactivo = 0;
        
        $inactivo = $conn->prepare('SELECT Clientes.Id_Cliente, nombre_cliente, numero
        FROM Clientes INNER JOIN Telefonos ON Clientes.Id_Cliente LIKE Telefonos.Id_Cliente WHERE 
        activo ='.$inactivo);

        //$query->execute(array($dato."%", $dato."%", $dato."%"));
        $inactivo->execute();

        while($results = $inactivo->fetch()){
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
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>