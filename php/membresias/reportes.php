<?php 
    include '../conexion.php';

    $fechaActual = date('d-m-Y');
echo 'reportes';
    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de clientes</b></p>
            </div>
        </div>
    ';
    
    if(isset($_POST['membresias'])) {
        $opciones = $_POST['membresias'];
        if(in_array('1', $_POST['membresias'])){
            $html.= getMembresiasNuevas($conn);
        }
        
        if(in_array('2', $_POST['membresias'])){
            $html.= getMembresiasVencer($conn);
        }
    
    }

    function getMembresiasNuevas($conn) {
        global $fechaActual;
        $fechaNueva = menosSieteDias();

        $activo = 1;
        $datos = $conn->prepare('SELECT Clientes.Id_Cliente AS Id_Cliente, nombre_cliente, numero 
        FROM Clientes INNER JOIN Telefonos INNER JOIN Membresias ON activo = '.$activo." AND 
        Clientes.Id_Cliente = Membresias.Id_Cliente AND Clientes.Id_Cliente = Membresias.Id_Cliente 
        BETWEEN str_to_date('".$fechaNueva."','%d/%m/%Y') AND str_to_date('".$fechaActual."','%d/%m/%Y') 
        GROUP BY (nombre_cliente) DESC LIMIT 5");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Top 5 Clientes con membresías nuevas <span>'.$fechaNueva.' a '.$fechaActual.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="membresias-nuevas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">Telefono</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-membresias-nuevas">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Cliente'].'">'.$r['Id_Cliente'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['numero'].'</td>
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

    function getMembresiasVencer($conn) {
        global $fechaActual;
        $fechaNueva = masSieteDias();

        $activo = 1;
        $datos = $conn->prepare('SELECT Clientes.Id_Cliente AS Id_Cliente, nombre_cliente, numero 
        FROM Clientes INNER JOIN Telefonos INNER JOIN Membresias ON activo = '.$activo." AND 
        Clientes.Id_Cliente = Membresias.Id_Cliente AND Clientes.Id_Cliente = Membresias.Id_Cliente 
        BETWEEN str_to_date('".$fechaActual."','%d/%m/%Y') AND str_to_date('".$fechaNueva."','%d/%m/%Y') 
        GROUP BY (nombre_cliente) DESC LIMIT 5");
        
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

    function masSieteDias(){
        $fecha = date('d-m-Y');
        $nuevaFecha = strtotime ( '+7 day' , strtotime ( $fecha ) ) ;
        $nuevaFecha = date ( 'd-m-Y' , $nuevaFecha );

        return $nuevaFecha;
    }

    function menosSieteDias(){
        $fecha = date('d-m-Y');
        $nuevaFecha = strtotime ( '-7 day' , strtotime ( $fecha ) ) ;
        $nuevaFecha = date ( 'd-m-Y' , $nuevaFecha );

        return $nuevaFecha;
    }

    $html.= '</div>';

    $html.= '<button id="descargar-pdf" class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 ml-5 mt-5 rounded-pill"
    type="button">Descargar como PDF</button>';
    echo $html;
?>