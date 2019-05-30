<?php 
    include '../conexion.php';

    $fecha = date('d/m/Y');

    $day = date('d');
    $mes = date('m');
    $año = date('Y');
    
    $semana = date("W",mktime(0,0,0,$mes,$day,$año));
    $diaSemana = date("w",mktime(0,0,0,$mes,$day,$año));
    
    if($diaSemana == 0)
        $diaSemana = 7;

    $primerDia=date("d/m/Y",mktime(0,0,0,$mes,$day-$diaSemana+1,$año));
    $ultimoDia=date("d/m/Y",mktime(0,0,0,$mes,$day+(5-$diaSemana),$año));

    try{
        $datos = "SELECT Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
        FROM Ventas INNER JOIN Clientes
        ON Ventas.Id_Cliente = Clientes.Id_Cliente 
        AND str_to_date(fecha_venta, '%d/%m/%Y') 
        BETWEEN str_to_date('".$primerDia."', '%d/%m/%Y') AND str_to_date('".$ultimoDia."', '%d/%m/%Y')
        AND cancelada = 0";
        //$datos->execute();
        
        foreach($conn->query($datos) as $row){
            echo '<tr>
                  <th scope="row" id="'.$row['Id_Venta'].'">'.$row['Id_Venta'].'</th>'.
                 '<td>'.$row['nombre_cliente'].'</td>'.
                 '<td>'.$row['fecha_venta'].'</td>'.
                 '<td>'.$row['total_venta'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>