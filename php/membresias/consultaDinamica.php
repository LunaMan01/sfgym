<?php
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        if($_POST['select-membresias'] == 2){
        //TODAS LAS MEMBRESIAS
            $query = $conn->prepare('SELECT Id_Membresia, nombre_cliente, fecha_inicio, fecha_fin
                FROM Membresias INNER JOIN Clientes ON Clientes.Id_Cliente LIKE Membresias.Id_Cliente WHERE 
                Id_Membresia LIKE ? OR nombre_cliente LIKE ? OR fecha_inicio LIKE ? OR fecha_fin LIKE ?');

            $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $query->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Membresia'].'">'.$results['Id_Membresia'].'</th>'.
                    '<td>'.$results['nombre_cliente'].'</td>'.
                    '<td>'.$results['fecha_inicio'].'</td>'.
                    '<td>'.$results['fecha_fin'].'</td>'.
                '<td>
                    <i class="material-icons actions mr-2"  watch-action data-toggle="modal" href="#ver-membresia-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-membresia-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
                </tr>';
            }
        }
        if($_POST['select-membresias'] == 1){
            //MEMBRESIAS VIGENTES
            $fecha = date('d/m/Y');

            $consultar = $conn->prepare("SELECT Id_Membresia, nombre_cliente, fecha_inicio, fecha_fin 
                FROM Membresias INNER JOIN Clientes ON Membresias.Id_Cliente = Clientes.Id_Cliente
                WHERE Id_Membresia LIKE ? OR nombre_cliente LIKE ? OR fecha_inicio LIKE ? 
                OR fecha_fin LIKE ? AND '".$fecha."' BETWEEN fecha_inicio AND fecha_fin");

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $consultar->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Membresia'].'">'.$results['Id_Membresia'].'</th>'.
                    '<td>'.$results['nombre_cliente'].'</td>'.
                    '<td>'.$results['fecha_inicio'].'</td>'.
                    '<td>'.$results['fecha_fin'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-membresia-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-membresia-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
                </tr>';
            }
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }
    $conn = null;
?>
