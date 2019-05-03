<?php 
    include '../conexion.php';



    
    $fecha = $_POST['rango-fecha'];
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
        if($opciones[0] == 1) {
            
            $html.= getClientesInactivos($conn);
        }
         
    }

    function getClientesInactivos($conn) {
        $inactivo = 0;
        $datos = 'SELECT Clientes.Id_Cliente, nombre_cliente, numero
                FROM Clientes INNER JOIN Telefonos ON Clientes.Id_Cliente LIKE Telefonos.Id_Cliente WHERE 
                activo ='.$inactivo;
        
        $rowConTabla = '
        <div class="row">
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
                        <table class="table table-hover">
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

    $html. '</div>';
    echo $html;
?>