<?php 
    include '../conexion.php';

    try{
        $html = ' 
            <div class="container" id="detalle-venta-card">
                <div class="row">
                    <div class="col-auto mt-3">
                        <p><b>Detalle de la venta</b></p>
                    </div>
                </div>
        ';

        $html .= getDatos($conn);

        $html.= '</div>';

        // $html.= '<button id="descargar-pdf" class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 ml-5 mt-5 rounded-pill"
        //     type="button">Descargar como PDF</button>';
        echo $html;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function getDatos($conn){
        $datos = $conn->prepare("SELECT Id_Producto, descripcion_producto, total_venta, cantidad_producto
        FROM VentasProductos WHERE Id_Venta = ". $_POST['id-venta']);
        
        $rowConTabla = '
        <div class="row mb-5">
            <div class="col-12">
                <div class="tablaPrincipal">
                    <div class="row mensajeAlert">
                        <div class="col-lg-1">
                            <i class="material-icons iconMessege">group</i>
                        </div>
                        <div class="col-lg-11">
                            <p>Visitas: <span>Detalle de Venta<span></p>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover" id="detalle-table">
                            <thead>   
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">SubTotal</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>  
                            <tbody id="cuerpo-tabla-detalle">   
        ';

        $datos->execute();
        
        while($r = $datos->fetch()){
                $rowConTabla.= '<tr>
                        <th scope="row" id="'.$r['Id_Producto'].'">'.$r['Id_Producto'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td>'.$r['precio_producto'].'</td>'.
                        '<td>'.$r['cantidad_producto'].'</td>'.
                    '</tr>';
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
    $conn = null;
?>