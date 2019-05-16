<?php
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        // if($_POST['select-gastos'] == 4){
        //     //TODOS LOD¿S GASTOS
        //     $query = $conn->prepare('SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto
        //         FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo WHERE 
        //         Id_Gasto LIKE ? OR descripcion_gasto LIKE ? OR fecha_gasto LIKE ? OR monto_gasto LIKE ? OR tipo_gasto LIKE ?');

        //     $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

        //     while($results = $query->fetch()){
        //         echo '<tr>
        //             <th scope="row" id="'.$results['Id_Gasto'].'">'.$results['Id_Gasto'].'</th>'.
        //                 '<td>'.$results['descripcion_gasto'].'</td>'.
        //                 '<td>'.$results['monto_gasto'].'</td>'.
        //                 '<td>'.$results['fecha_gasto'].'</td>'.
        //                 '<td>'.$results['tipo_gasto'].'</td>'.
        //             '<td>
        //                 <i class="material-icons actions watch-action mr-2"  data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
        //                 <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
        //                 <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
        //         </tr>';
        //     }
        // }

        if($_POST['select-gastos'] == 3){
            //GASTOS DEL DIA
            $fecha = date('d/m/Y');

            $consultar = "SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
                FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo
                AND fecha_gasto LIKE '".$fecha."' WHERE 
                Id_Gasto LIKE ? OR descripcion_gasto LIKE ? OR fecha_gasto LIKE ? OR monto_gasto LIKE ? OR tipo_gasto LIKE ?";

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $query->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Gasto'].'">'.$results['Id_Gasto'].'</th>'.
                        '<td>'.$results['descripcion_gasto'].'</td>'.
                        '<td>'.$results['monto_gasto'].'</td>'.
                        '<td>'.$results['fecha_gasto'].'</td>'.
                        '<td>'.$results['tipo_gasto'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
                        <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
                </tr>';
            }
        }
        
        if($_POST['select-gastos'] == 2){
            //GASTOS SEMANA
            $day = date('d');
            $mes = date('m');
            $año = date('Y');
    
            $semana=date("W",mktime(0,0,0,$mes,$day,$año));
            $diaSemana=date("w",mktime(0,0,0,$mes,$day,$año));
    
            if($diaSemana==0)
                $diaSemana=7;

            $primerDia=date("d/m/Y",mktime(0,0,0,$mes,$day-$diaSemana+1,$año));
            $ultimoDia=date("d/m/Y",mktime(0,0,0,$mes,$day+(5-$diaSemana),$año));

            $consultar = "SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
                FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo 
                AND str_to_date(fecha_gasto, '%d/%m/%Y') 
                BETWEEN str_to_date('".$primerDia."', '%d/%m/%Y') AND str_to_date('".$ultimoDia."', '%d/%m/%Y')
                WHERE Id_Gasto LIKE ? OR descripcion_gasto LIKE ? OR fecha_gasto LIKE ? 
                OR monto_gasto LIKE ? OR tipo_gasto LIKE ?";

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $query->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Gasto'].'">'.$results['Id_Gasto'].'</th>'.
                        '<td>'.$results['descripcion_gasto'].'</td>'.
                        '<td>'.$results['monto_gasto'].'</td>'.
                        '<td>'.$results['fecha_gasto'].'</td>'.
                        '<td>'.$results['tipo_gasto'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
                        <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
                </tr>';
            }
        }

        if($_POST['select-gastos'] == 1){
            //GASTOS MES
            $mes = date('m');
            $año = date('Y');

            $firstDay = primerDia($mes,$año);
            $lastDay = ultimoDia($mes,$año);
            
            $consultar = "SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
                FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo
                AND str_to_date(fecha_gasto, '%d/%m/%Y') 
                BETWEEN str_to_date('".$firstDay."/".$mes."/".$año."', '%d/%m/%Y') 
                AND str_to_date('".$lastDay."/".$mes."/".$año."', '%d/%m/%Y')
                WHERE Id_Gasto LIKE ? OR descripcion_gasto LIKE ? OR fecha_gasto LIKE ? 
                OR monto_gasto LIKE ? OR tipo_gasto LIKE ?";

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $query->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Gasto'].'">'.$results['Id_Gasto'].'</th>'.
                        '<td>'.$results['descripcion_gasto'].'</td>'.
                        '<td>'.$results['monto_gasto'].'</td>'.
                        '<td>'.$results['fecha_gasto'].'</td>'.
                        '<td>'.$results['tipo_gasto'].'</td>'.
                    '<td>
                        <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-gasto-modal"> remove_red_eye</i>
                        <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-gasto-modal"> create</i>
                        <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-gasto-modal"> delete</i> </td>
                </tr>';
            }
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }

    function primerDia($mes, $año){
        return date("d", mktime(0,0,0, $mes, 1, $año));
    }

    function ultimoDia($mes, $año){
        return date("d",(mktime(0,0,0, $mes+1, 1, $año)-1));
    }
    $conn = null;
?>