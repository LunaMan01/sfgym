<?php 
    include '../conexion.php';
    
    $day = date('d');
    $mes = date('m');
    $año = date('Y');
    
    $semana=date("W",mktime(0,0,0,$mes,$day,$año));
    $diaSemana=date("w",mktime(0,0,0,$mes,$day,$año));
    
    if($diaSemana==0)
        $diaSemana=7;

    $primerDia=date("d/m/Y",mktime(0,0,0,$mes,$day-$diaSemana+1,$año));
    $ultimoDia=date("d/m/Y",mktime(0,0,0,$mes,$day+(5-$diaSemana),$año));

    try{
        $consulta = "SELECT Id_Compra, descripcion_compra, monto_compra, fecha_compra, tipo_compra
        FROM Compras INNER JOIN Instructores INNER JOIN TipoCompras
        ON Compras.Id_Instructor = Instructores.Id_Instructor
        AND Compras.Id_TipoCompra = TipoCompras.Id_TipoCompra
        AND str_to_date(fecha_compra, '%d/%m/%Y') 
        BETWEEN str_to_date('".$primerDia."', '%d/%m/%Y') AND str_to_date('".$ultimoDia."', '%d/%m/%Y')
        AND cancelada = 0";

        foreach($conn->query($consulta) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Compra'].'">'.$row['Id_Compra'].'</th>'.
                '<td>'.$row['descripcion_compra'].'</td>'.
                '<td>'.$row['monto_compra'].'</td>'.
                '<td>'.$row['fecha_compra'].'</td>'.
                '<td>'.$row['tipo_compra'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-compra-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-compra-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-compra-modal"> delete</i> 
            </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>