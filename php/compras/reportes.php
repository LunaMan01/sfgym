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

    $html .= getProductos($conn);

    $html .= getAparatos($conn);

    function getCompras($conn) {
        global $array;

        $fecha1 = $array[0];
        $fecha2 = $array[1];

        $activo = 1;
        $datos = $conn->prepare("SELECT Id_Compra, nombre_instructor, tipo_compra, fecha_compra, total_compra
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
                        <table class="table table-hover" id="compras-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Instructor</th>
                                    <th scope="col">Tipo de compra</th>
                                    <th scope="col">Fecha de compra</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Compra'].'">'.$r['Id_Compra'].'</th>'.
                        '<td>'.$r['nombre_instructor'].'</td>'.
                        '<td>'.$r['tipo_compra'].'</td>'.
                        '<td>'.$r['fecha_compra'].'</td>'.
                        '<td class="text-right">'.$r['total_compra'].'</td>
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

    function getProductos($conn) {
        global $array;

        $fecha1 = $array[0];
        $fecha2 = $array[1];

        $activo = 1;
        $datos = $conn->prepare("SELECT Compras.Id_Compra, descripcion_producto, fecha_compra, total
        FROM Compras INNER JOIN ComprasProductos INNER JOIN Productos
        ON Compras.Id_Compra = ComprasProductos.Id_Compra
        AND Productos.Id_Producto = ComprasProductos.Id_Producto
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
                            <p>Compras de productos realizadas entre: <span>'.$fecha1.' - '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="compras-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id Compra</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Fecha de compra</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Compra'].'">'.$r['Id_Compra'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['fecha_compra'].'</td>'.
                        '<td class="text-right">'.$r['total'].'</td>
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

    function getAparatos($conn) {
        global $array;

        $fecha1 = $array[0];
        $fecha2 = $array[1];

        $activo = 1;
        $datos = $conn->prepare("SELECT Compras.Id_Compra, nombre_aparato, fecha_compra, total
        FROM ComprasAparatos INNER JOIN Aparatos INNER JOIN Compras
        ON Aparatos.Id_Aparato = ComprasAparatos.Id_Aparato
        AND ComprasAparatos.Id_Compra = Compras.Id_Compra
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
                            <p>Compras de aparatos realizadas entre: <span>'.$fecha1.' - '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="compras-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id Compra</th>
                                    <th scope="col">Aparato</th>
                                    <th scope="col">Fecha de compra</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-clientes-inactivos">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Compra'].'">'.$r['Id_Compra'].'</th>'.
                        '<td>'.$r['nombre_aparato'].'</td>'.
                        '<td>'.$r['fecha_compra'].'</td>'.
                        '<td class="text-right">'.$r['total'].'</td>
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

    $html.= '<button id="descargar-pdf" class="btn hidable btn-outline-success btn-sm my-2 my-sm-0 mr-3 ml-5 mt-5 rounded-pill"
    type="button">Descargar como PDF</button>';
    echo $html;
?>