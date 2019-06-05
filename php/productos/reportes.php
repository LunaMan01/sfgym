<?php 
    include '../conexion.php';

    if(!isset($_POST['productos'])) {
        echo 5;
        return 5;
    }

    $fechaActual = date('d/m/Y');

    // $fecha = $_POST['fecha'];

    //$array = explode('-', $fecha);

    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de productos</b></p>
            </div>
        </div>
    ';
    
    if(isset($_POST['productos'])) {
        $opciones = $_POST['productos'];
        if(in_array('1', $_POST['productos'])){
            $html.= getProductosExistencia($conn);
        }
        
        if(in_array('2', $_POST['productos'])){
            $html.= getProductosMasVendidos($conn);
        }

        if(in_array('3', $_POST['productos'])){
            $html.= getProductosMenosVendidos($conn);
        }

        if(in_array('4', $_POST['productos'])){
            $html.= getProductosPocaExistencia($conn);
        }

        if(in_array('5', $_POST['productos'])){
            $html.= getProductosProximosCaducar($conn);
        }
    
    }

    function getProductosMasVendidos($conn){

    }

    function getProductosMenosVendidos($conn){

    }

    function getProductosExistencia($conn) {
        $datos = $conn->prepare("SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto
        FROM Productos WHERE existencia_producto > 0");

        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Productos en Existencia</p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="productos-existencia-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Fecha Caducidad</th>
                                    <th scope="col">Existencia</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-productos-existencia">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Producto'].'">'.$r['Id_Producto'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['fecha_caducidad'].'</td>'.
                        '<td>'.$r['existencia_producto'].'</td>
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

    function getProductosPocaExistencia($conn){
        $datos = $conn->prepare("SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto
        FROM Productos WHERE existencia_producto < 5 AND existencia_producto > 0");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Productos con poca existencia</p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="productos-menos-existencia-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Fecha Caducidad</th>
                                    <th scope="col">Existencia</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-productos-menos-existencia">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Producto'].'">'.$r['Id_Producto'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['fecha_caducidad'].'</td>'.
                        '<td>'.$r['existencia_producto'].'</td>
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

    function getProductosProximosCaducar($conn){
        global $fechaActual;
        $fechaNueva = masSieteDias();

        $datos = $conn->prepare("SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto
        FROM Productos WHERE str_to_date(fecha_caducidad, '%d/%m/%Y') 
        BETWEEN '".$fechaActual."' AND str_to_date('".$fechaNueva."', '%d/%m/%Y')");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Productos a caducar en la siguiente semana</p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="productos-caducar-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Fecha Caducidad</th>
                                    <th scope="col">Existencia</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-productos-caducar">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Producto'].'">'.$r['Id_Producto'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['fecha_caducidad'].'</td>'.
                        '<td>'.$r['existencia_producto'].'</td>
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
        $nuevaFecha = date ( 'd/m/Y' , $nuevaFecha );

        return $nuevaFecha;
    }

    $html.= '</div>';

    $html.= '<button id="descargar-pdf" class="btn hidable btn-outline-success btn-sm my-2 my-sm-0 mr-3 ml-5 mt-5 rounded-pill"
    type="button">Descargar como PDF</button>';
    echo $html;
?>