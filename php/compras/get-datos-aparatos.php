<?php 
    include '../conexion.php';

    try{
        $consulta = 'SELECT Aparatos.Id_Aparato, nombre_aparato
        FROM ComprasAparatos INNER JOIN Aparatos INNER JOIN Compras
        ON Aparatos.Id_Aparato = ComprasAparatos.Id_Aparato
        AND ComprasAparatos.Id_Compra = Compras.Id_Compra';

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Aparato'].'">'.$row['Id_Aparato'].'</th>'.
                '<td>'.$row['nombre_aparato'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-compra-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-compra-modal"> create</i>
                
            </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>