<?php
    include '../conexion.php';

    $cadenaFecha = $_POST['fecha-rango-reporte'];

    //separar la fecha
    $array = explode("-", $cadenaFecha);

    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de compras</b></p>
            </div>
        </div>
    ';

    $html .= getCompras($conn);

    function getCompras($conn) {
        global $array;

        $fecha1 = $array[0];
        $fecha2 = $array[1];

        $activo = 1;
        $datos = $conn->prepare("SELECT Id_Compra, descripcion_compra, monto_compra, fecha_compra, tipo_compra, nombre_instructor
        FROM Compras INNER JOIN Instructores INNER JOIN TipoCompras
        ON Compras.Id_Instructor = Instructores.Id_Instructor
        AND Compras.Id_TipoCompra = TipoCompras.Id_TipoCompra
        AND str_to_date(fecha_compra, '%d/%m/%Y') BETWEEN str_to_date('".$fecha1."','%d/%m/%Y') 
        AND str_to_date('".$fecha2."','%d/%m/%Y')");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Compras realizadas entre: <span>'.$fecha1.' - '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="clientes-masVisitas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Tipo de Compra</th>
                                    <th scope="col">Comprado por</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Compra'].'">'.$r['Id_Compra'].'</th>'.
                        '<td>'.$r['descripcion_compra'].'</td>'.
                        '<td>'.$r['monto_compra'].'</td>'.
                        '<td>'.$r['fecha_compra'].'</td>'.
                        '<td>'.$r['tipo_compra'].'</td>'.
                        '<td>'.$r['nombre_instructor'].'</td>
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
?>