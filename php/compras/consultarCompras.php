<?php 
    include '../conexion.php';

    try{
        $consulta = 'SELECT Id_Compra, fecha_compra, total_compra, tipo_compra, TipoCompras.Id_TipoCompra
        FROM Compras INNER JOIN TipoCompras
        ON Compras.Id_TipoCompra = TipoCompras.Id_TipoCompra
        WHERE cancelada = 0';

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" data-tipo="'.$row['Id_TipoCompra'].'" id="'.$row['Id_Compra'].'">'.$row['Id_Compra'].'</th>'.
                '<td>'.$row['fecha_compra'].'</td>'.
                '<td>'.$row['total_compra'].'</td>'.
                '<td>'.$row['tipo_compra'].'</td>'.
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