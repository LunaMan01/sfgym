<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];
    
    try{
        if($_POST['select-visitas'] == 3){
            //VISITAS DEL MES
            $mes = date('m');
            $año = date('Y');

            $firstDay = primerDia($mes,$año);
            $lastDay = ultimoDia($mes,$año);

            $datos = $conn->prepare("SELECT Id_Visita, nombre_cliente, fecha_visitas FROM Visitas 
                INNER JOIN Clientes 
                ON Visitas.Id_Cliente = Clientes.Id_Cliente AND str_to_date(fecha_visitas, '%d/%m/%Y') 
                BETWEEN str_to_date('".$firstDay."/".$mes."/".$año."', '%d/%m/%Y') 
                AND str_to_date('".$lastDay."/".$mes."/".$año."', '%d/%m/%Y') WHERE 
                Id_Visita LIKE ? OR nombre_cliente LIKE ? OR fecha_visitas LIKE ?");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                        <th scope="row" id="'.$results['Id_Visita'].'">'.$results['Id_Visita'].'</th>'.
                        '<td>'.$results['nombre_cliente'].'</td>'.
                        '<td>'.$results['fecha_visitas'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                        <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }
        }

        if($_POST['select-visitas'] == 2){
            //VISITAS DE LA SEMANA
            $day = date('d');
            $mes = date('m');
            $año = date('Y');
    
            $semana = date("W", mktime(0, 0, 0, $mes, $day, $año));
            $diaSemana = date("w", mktime(0, 0, 0, $mes, $day, $año));
    
            if($diaSemana == 0)
                $diaSemana = 7;

            $primerDia = date("d/m/Y", mktime(0, 0, 0, $mes, $day-$diaSemana+1, $año));
            $ultimoDia = date("d/m/Y", mktime(0, 0, 0, $mes, $day+(5-$diaSemana), $año));

            $datos = $conn->prepare("SELECT Id_Visita, nombre_cliente, fecha_visitas FROM Visitas INNER JOIN Clientes 
                ON Visitas.Id_Cliente = Clientes.Id_Cliente AND str_to_date(fecha_visitas, '%d/%m/%Y') 
                BETWEEN str_to_date('".$primerDia."', '%d/%m/%Y') AND str_to_date('".$ultimoDia."', '%d/%m/%Y')
                WHERE Id_Visita LIKE ? OR nombre_cliente LIKE ? OR fecha_visitas LIKE ?");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                        <th scope="row" id="'.$results['Id_Visita'].'">'.$results['Id_Visita'].'</th>'.
                     '<td>'.$results['nombre_cliente'].'</td>'.
                    '<td>'.$results['fecha_visitas'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-visita-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-visita-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-visita-modal"> delete</i> </td>
                </tr>';
            }      
        }

        if($_POST['select-visitas'] == 1){
            //VISITAS DEL DIA
            $fecha = date('d/m/Y');

            $datos = $conn->prepare("SELECT Id_Visita, nombre_cliente, fecha_visitas FROM Visitas INNER JOIN Clientes 
                ON Visitas.Id_Cliente = Clientes.Id_Cliente AND fecha_visitas LIKE '".$fecha."' 
                WHERE Id_Visita LIKE ? OR nombre_cliente LIKE ? OR fecha_visitas LIKE ?");
    
            $datos->execute(array($dato."%", $dato."%", $dato."%"));

            while($results = $datos->fetch()){
                echo '<tr>
                      <th scope="row" id="'.$results['Id_Visita'].'">'.$results['Id_Visita'].'</th>'.
                     '<td>'.$results['nombre_cliente'].'</td>'.
                     '<td>'.$results['fecha_visitas'].'</td>'.
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
