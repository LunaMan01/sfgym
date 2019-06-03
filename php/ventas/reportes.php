<?php 
    include '../conexion.php';

    $cadenaFecha = $_POST['fecha-rango-reporte'];
    //separar la fecha
    $array = explode("-", $cadenaFecha);

    $html = ' 
    <div class="container" id="crear-reporte-card">
        <div class="row">
            <div class="col-auto mt-3">
                <p><b>Reporte de ventas</b></p>
            </div>
        </div>
    ';
    
    // if($_POST['select-tipo-venta'] == 1){
    //     $html.=getVentasReporte($conn);
    // }

    // if($_POST['select-tipo-venta'] == 2){
    //     $html.=getMembresiasReporte($conn);
    // }

    // if($_POST['select-tipo-venta'] == 3){
    //     $html.=getVisitasReporte($conn);
    // }

    if(isset($_POST['select-tipo-venta'])) {
        if(in_array('1', $_POST['select-tipo-venta'])){
            $html.=getVentasReporte($conn);
        }
        
        if(in_array('2', $_POST['select-tipo-venta'])){
            $html.=getMembresiasReporte($conn);
        }
        
        if(in_array('3', $_POST['select-tipo-venta'])){
            $html.=getVisitasReporte($conn);
        }
    }


    function getVentasReporte($conn) {
        global $array;    

        $fecha1 = $array[0];
        $fecha2 = $array[1];
        
        $datos = $conn->prepare("SELECT Ventas.Id_Venta, nombre_cliente, fecha_venta, descripcion_producto, cantidad_producto, subtotal_venta  
        FROM Ventas INNER JOIN Productos INNER JOIN VentasProductos INNER JOIN Clientes
        ON Ventas.Id_Venta = VentasProductos.Id_Venta
        AND Productos.Id_Producto = VentasProductos.Id_Producto
        AND Ventas.Id_Cliente = Clientes.Id_Cliente
        WHERE str_to_date(fecha_venta, '%d/%m/%Y') BETWEEN 
        str_to_date('".$fecha1."', '%d/%m/%Y') AND str_to_date('".$fecha2."', '%d/%m/%Y')
        AND cancelada = 0");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Ventas: <span>'.$fecha1.' a '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="ventas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre cliente</th>
                                    <th scope="col">Fecha Venta</th>
                                    <th scope="col">Nombre producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-ventas">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Venta'].'">'.$r['Id_Venta'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['fecha_venta'].'</td>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['cantidad_producto'].'</td>'.
                        '<td>'.$r['subtotal_venta'].'</td>
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

    function getMembresiasReporte($conn) {
        global $array;    

        $fecha1 = $array[0];
        $fecha2 = $array[1];
        
        $datos = $conn->prepare("SELECT Ventas.Id_Venta, nombre_cliente, fecha_venta, fecha_inicio, fecha_fin, total_venta  
        FROM Ventas INNER JOIN Clientes INNER JOIN Membresias
        ON Ventas.Id_Cliente = Clientes.Id_Cliente 
        AND Membresias.Id_Cliente = Clientes.Id_Cliente
        WHERE str_to_date(fecha_venta, '%d/%m/%Y') BETWEEN 
        str_to_date('".$fecha1."', '%d/%m/%Y') AND str_to_date('".$fecha2."', '%d/%m/%Y')
        AND cancelada = 0");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Ventas: <span>'.$fecha1.' a '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="ventas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre cliente</th>
                                    <th scope="col">Fecha Venta</th>
                                    <th scope="col">Fecha Inicio</th>
                                    <th scope="col">Fecha Fin</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-ventas">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Venta'].'">'.$r['Id_Venta'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['fecha_venta'].'</td>'.
                        '<td>'.$r['fecha_inicio'].'</td>'.
                        '<td>'.$r['fecha_fin'].'</td>'.
                        '<td>'.$r['total_venta'].'</td>
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

    function getVisitasReporte($conn) {
        global $array;    

        $fecha1 = $array[0];
        $fecha2 = $array[1];
        
        $datos = $conn->prepare("SELECT Ventas.Id_Venta, nombre_cliente, fecha_venta, fecha_visitas, total_venta  
        FROM Ventas INNER JOIN Clientes INNER JOIN Visitas
        ON Ventas.Id_Cliente = Clientes.Id_Cliente
        AND Visitas.Id_Cliente = Clientes.Id_Cliente
        WHERE str_to_date(fecha_venta, '%d/%m/%Y') BETWEEN 
        str_to_date('".$fecha1."', '%d/%m/%Y') AND str_to_date('".$fecha2."', '%d/%m/%Y')
        AND cancelada = 0");
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Ventas: <span>'.$fecha1.' a '.$fecha2.'<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="ventas-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre cliente</th>
                                    <th scope="col">Fecha Venta</th>
                                    <th scope="col">Fecha Visita</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-ventas">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Venta'].'">'.$r['Id_Venta'].'</th>'.
                        '<td>'.$r['nombre_cliente'].'</td>'.
                        '<td>'.$r['fecha_venta'].'</td>'.
                        '<td>'.$r['fecha_visitas'].'</td>'.
                        '<td>'.$r['total_venta'].'</td>
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