<?php 
    include '../conexion.php';

    $cadenaFecha = $_POST['fecha'];
    //separar la fecha
    $array = explode("-", $cadenaFecha);

    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de gastos</b></p>
            </div>
        </div>
    ';

    $html.=getGastosReporte($conn);

    function getGastosReporte($conn) {
        global $array;    

        $fecha1 = $array[0];
        $fecha2 = $array[1];
        
        $datos = $conn->prepare("SELECT Id_Gasto, descripcion_gasto, fecha_gasto, monto_gasto, tipo_gasto 
        FROM Gastos INNER JOIN TipoGastos ON Gastos.Id_Tipo LIKE TipoGastos.Id_Tipo WHERE fecha_gasto 
        BETWEEN '".$fecha1."' AND str_to_date('".$fecha2."' ,'%d/%m/%Y')");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Gastos: <span>'.$fecha1.' a '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="gastos-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Fecha Gasto</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Tipo Gasto</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-gastos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Gasto'].'">'.$r['Id_Gasto'].'</th>'.
                        '<td>'.$r['descripcion_gasto'].'</td>'.
                        '<td>'.$r['fecha_gasto'].'</td>'.
                        '<td>'.$r['monto_gasto'].'</td>'.
                        '<td>'.$r['tipo_gasto'].'</td>
                    </tr>';
            }

            $rowConTabla.= '
            </tbody>
            </table>
            </div>
            </div>  
            </div>
            </div>
            ';

            return $rowConTabla;
    }

    $html.= '</div>';

    $html.= '<button id="descargar-pdf" class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 ml-5 mt-5 rounded-pill"
    type="button">Descargar como PDF</button>';
    echo $html;
?>