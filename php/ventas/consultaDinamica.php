<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];
    
    try{
        if($_POST['select-ventas'] == 8){

        }

        if($_POST['select-ventas'] == 7){
            
        }

        if($_POST['select-ventas'] == 6){
            
        }

        if($_POST['select-ventas'] == 5){
            //VENTAS CANCELADAS
            $fecha = '31/05/2019';
            $datos = $conn->prepare("SELECT Id_Venta, nombre_cliente, fecha_venta, Ventas.total_venta 
            FROM Ventas INNER JOIN Clientes
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            AND fecha_venta LIKE '".$fecha."'
            AND cancelada = 1
            WHERE Id_Venta LIKE ? OR nombre_cliente LIKE ? OR fecha_venta LIKE ? OR total_venta LIKE ?
            AND cancelada = 0");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                        <th scope="row" id="'.$results['Id_Venta'].'">'.$results['Id_Venta'].'</th>'.
                        '<td>'.$results['nombre_cliente'].'</td>'.
                        '<td>'.$results['fecha_venta'].'</td>'.
                        '<td>'.$results['total_venta'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                        
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }
        }
        
        if($_POST['select-ventas'] == 4){
            //VENTAS DEL MES
            $mes = date('m');
            $año = date('Y');

            $firstDay = primerDia($mes,$año);
            $lastDay = ultimoDia($mes,$año);

            $datos = $conn->prepare("SELECT Id_Venta, nombre_cliente, fecha_venta, total_venta 
            FROM Ventas INNER JOIN Clientes
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            AND str_to_date(fecha_venta, '%d/%m/%Y') 
            BETWEEN str_to_date('".$firstDay."/".$mes."/".$año."', '%d/%m/%Y') AND str_to_date('".$lastDay."/".$mes."/".$año."', '%d/%m/%Y')
            WHERE Id_Venta LIKE ? OR nombre_cliente LIKE ? OR fecha_venta LIKE ? OR total_venta LIKE ?
            AND cancelada = 0");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                        <th scope="row" id="'.$results['Id_Venta'].'">'.$results['Id_Venta'].'</th>'.
                        '<td>'.$results['nombre_cliente'].'</td>'.
                        '<td>'.$results['fecha_venta'].'</td>'.
                        '<td>'.$results['total_venta'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                        
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }
        }

        if($_POST['select-ventas'] == 3){
            //VENTAS DE LA SEMANA
            $day = date('d');
            $mes = date('m');
            $año = date('Y');
    
            $semana = date("W", mktime(0, 0, 0, $mes, $day, $año));
            $diaSemana = date("w", mktime(0, 0, 0, $mes, $day, $año));
    
            if($diaSemana == 0)
                $diaSemana = 7;

            $primerDia = date("d/m/Y", mktime(0, 0, 0, $mes, $day-$diaSemana+1, $año));
            $ultimoDia = date("d/m/Y", mktime(0, 0, 0, $mes, $day+(5-$diaSemana), $año));

            $datos = $conn->prepare("SELECT Id_Venta, nombre_cliente, fecha_venta, total_venta 
            FROM Ventas INNER JOIN Clientes
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            AND str_to_date(fecha_venta, '%d/%m/%Y') 
            BETWEEN str_to_date('".$primerDia."', '%d/%m/%Y') AND str_to_date('".$ultimoDia."', '%d/%m/%Y')
            WHERE Id_Venta LIKE ? OR nombre_cliente LIKE ? OR fecha_venta LIKE ? OR total_venta LIKE ?
            AND cancelada = 0");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                        <th scope="row" id="'.$results['Id_Venta'].'">'.$results['Id_Venta'].'</th>'.
                        '<td>'.$results['nombre_cliente'].'</td>'.
                        '<td>'.$results['fecha_venta'].'</td>'.
                        '<td class="text-right">'.$results['total_venta'].'</td>'.
                    '<td class="text-right">
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                        <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }      
        }

        if($_POST['select-ventas'] == 2){
            //VENTAS DEL DIA
            $fecha = date('d/m/Y');

            $datos = $conn->prepare("SELECT Id_Venta, nombre_cliente, fecha_venta, total_venta 
            FROM Ventas INNER JOIN Clientes
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            AND fecha_venta LIKE '".$fecha."' 
            WHERE Id_Venta LIKE ? OR nombre_cliente LIKE ? OR fecha_venta LIKE ? OR total_venta LIKE ?
            AND cancelada = 0");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                      <th scope="row" id="'.$results['Id_Venta'].'">'.$results['Id_Venta'].'</th>'.
                     '<td>'.$results['nombre_cliente'].'</td>'.
                     '<td>'.$results['fecha_venta'].'</td>'.
                     '<td>'.$results['total_venta'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }
        }

        if($_POST['select-ventas'] == 1){
            //TODAS LAS VENTAS
            $fecha = date('d/m/Y');

            $datos = $conn->prepare("SELECT Id_Venta, nombre_cliente, fecha_venta, total_venta 
            FROM Ventas INNER JOIN Clientes
            ON Ventas.Id_Cliente = Clientes.Id_Cliente 
            WHERE Id_Venta LIKE ? OR nombre_cliente LIKE ? OR fecha_venta LIKE ? OR total_venta LIKE ?
            AND cancelada = 0");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                      <th scope="row" id="'.$results['Id_Venta'].'">'.$results['Id_Venta'].'</th>'.
                     '<td>'.$results['nombre_cliente'].'</td>'.
                     '<td>'.$results['fecha_venta'].'</td>'.
                     '<td>'.$results['total_venta'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }
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
