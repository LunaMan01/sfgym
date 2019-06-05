<?php 
    include '../conexion.php';

    $mes = date('m');
    $año = date('Y');

    $firstDay = primerDia($mes,$año);
    $lastDay = ultimoDia($mes,$año);

    try{
        $consulta = "SELECT Id_Compra, fecha_compra, total_compra, tipo_compra
        FROM Compras INNER JOIN TipoCompras
        ON Compras.Id_TipoCompra = TipoCompras.Id_TipoCompra
        AND str_to_date(fecha_compra, '%d/%m/%Y') 
        BETWEEN str_to_date('".$firstDay."/".$mes."/".$año."', '%d/%m/%Y') 
        AND str_to_date('".$lastDay."/".$mes."/".$año."', '%d/%m/%Y')";

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Compra'].'">'.$row['Id_Compra'].'</th>'.
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

    function primerDia($mes, $año){
        return date("d", mktime(0,0,0, $mes, 1, $año));
    }

    function ultimoDia($mes, $año){
        return date("d",(mktime(0,0,0, $mes+1, 1, $año)-1));
    }
    $conn = null;
?>