<?php 
    include '../conexion.php';

    $cadenaFecha = $_POST['rango-fecha'];

    //separar la fecha
    $array = explode("-", $cadenaFecha);
        
    $fecha1 = $array[0];
    $fecha2 = $array[1];

    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de clientes</b></p>
            </div>
        </div>
    ';
    
    if(isset($_POST['clientes'])) {
        $opciones = $_POST['clientes'];
        if(in_array('1', $_POST['clientes'])){
            $html.= getClientesInactivos($conn);
        }
        
        if(in_array('2', $_POST['clientes'])){
            $html.= getClientesMasVisitas($conn);
        }
        
        if(in_array('3', $_POST['clientes'])){
            $html.= getClientesMenosVisitas($conn);
        }
    }

    function getClientesInactivos($conn) {
        global $array, $fecha1, $fecha2;
        
        $inactivo = 0;
        $datos = 'SELECT Clientes.Id_Cliente, nombre_cliente, numero
                FROM Clientes INNER JOIN Telefonos ON Clientes.Id_Cliente LIKE Telefonos.Id_Cliente WHERE 
                activo ='.$inactivo ;
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Lista de clientes inactivos</p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="clientes-inactivos-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">Teléfono</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

            foreach($conn->query($datos) as $row){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$row['Id_Cliente'].'">'.$row['Id_Cliente'].'</th>'.
                        '<td>'.$row['nombre_cliente'].'</td>'.
                        '<td>'.$row['numero'].'</td>
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

    function getClientesMasVisitas($conn) {
        global $array, $fecha1, $fecha2;

        $activo = 1;
        $datos = $conn->prepare('SELECT Visitas.Id_Cliente AS Id_Cliente ,nombre_cliente, COUNT(*) AS nVisitas 
        FROM Clientes INNER JOIN Visitas ON activo = '.$activo." AND Clientes.Id_Cliente = Visitas.Id_Cliente 
        AND str_to_date(visitas.fecha_visitas, '%d/%m/%Y') BETWEEN str_to_date('".$fecha1."','%d/%m/%Y') 
        AND str_to_date('".$fecha2."','%d/%m/%Y') GROUP BY (nombre_cliente) ORDER BY nVisitas DESC LIMIT 5");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Top 5 Clientes con mayor número de visitas <span> 09/05/2019 al 09/06/2019<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="clientes-masVisitas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">No. visitas</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Cliente'].'">'.$r['Id_Cliente'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['nVisitas'].'</td>
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

    function getClientesMenosVisitas($conn) {
        global $array, $fecha1, $fecha2;

        $activo = 1;
        $datos = $conn->prepare('SELECT Visitas.Id_Cliente AS Id_Cliente ,nombre_cliente, COUNT(*) AS nVisitas 
        FROM Clientes INNER JOIN Visitas ON activo = '.$activo." AND Clientes.Id_Cliente = Visitas.Id_Cliente 
        AND str_to_date(visitas.fecha_visitas, '%d/%m/%Y') BETWEEN str_to_date('".$fecha1."','%d/%m/%Y') 
        AND str_to_date('".$fecha2."','%d/%m/%Y') GROUP BY (nombre_cliente) ORDER BY nVisitas ASC LIMIT 5");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Top 5 Clientes con menor número de visitas <span> 09/05/2019 al 09/06/2019<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="clientes-masVisitas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">No. visitas</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Cliente'].'">'.$r['Id_Cliente'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['nVisitas'].'</td>
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


<!-- 
select nombre_cliente, count(*) from clientes inner join visitas on activo = 1 and Clientes.Id_Cliente = visitas.id_Cliente and str_to_date(visitas.fecha_visitas, '%d/%m/%Y') between str_to_date('09/05/2019','%d/%m/%Y') and str_to_date('09/06/2019','%d/%m/%Y') group by (nombre_cliente) order by 2 desc limit 10; -->
