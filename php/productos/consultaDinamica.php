<?php 
    include '../conexion.php';

    $dato = $_POST['dato'];

    try{
        if($_POST['select-productos'] == 1){
        //TODOS LOS PRODUCTOS
            $query = $conn->prepare('SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto
                FROM Productos WHERE Id_Producto LIKE ? OR descripcion_producto LIKE ? OR 
                fecha_caducidad LIKE ? OR existencia_producto LIKE ? OR precio_producto LIKE ?');

            $query->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $query->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Producto'].'">'.$results['Id_Producto'].'</th>'.
                    '<td>'.$results['descripcion_producto'].'</td>'.
                    '<td>'.$results['fecha_caducidad'].'</td>'.
                    '<td>'.$results['existencia_producto'].'</td>'.
                    '<td>'.$results['precio_producto'].'</td>'.
                '<td>
                    <i class="material-icons actions mr-2" watch-action data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                    
                </tr>';
            }
        }

        if($_POST['select-productos'] == 2){
            //PROXIMOS A CADUCAR
            $fechaActual = actual();

            $fechaSiguiente = masSieteDias();
            
            $consultar = $conn->prepare("SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
                FROM Productos WHERE str_to_date(fecha_caducidad, '%d/%m/%Y') 
                BETWEEN str_to_date('".$fechaActual."', '%d/%m/%Y') AND str_to_date('".$fechaSiguiente."', '%d/%m/%Y')
                HAVING Id_Producto LIKE ? OR descripcion_producto LIKE ? OR 
                fecha_caducidad LIKE ? OR existencia_producto LIKE ? OR precio_producto LIKE ?");

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $consultar->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Producto'].'">'.$results['Id_Producto'].'</th>'.
                    '<td>'.$results['descripcion_producto'].'</td>'.
                    '<td>'.$results['fecha_caducidad'].'</td>'.
                    '<td>'.$results['existencia_producto'].'</td>'.
                    '<td>'.$results['precio_producto'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
                </tr>';
            }
        }

        if($_POST['select-productos'] == 3){
            //PRODUCTOS POCA EXISTENCIA
            $consultar = $conn->prepare("SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
                FROM Productos WHERE existencia_producto < 5 HAVING Id_Producto LIKE ? OR descripcion_producto LIKE ? OR 
                fecha_caducidad LIKE ? OR existencia_producto LIKE ? OR precio_producto LIKE ?");

            $consultar->execute(array($dato."%", $dato."%", $dato."%", $dato."%", $dato."%"));

            while($results = $consultar->fetch()){
                echo '<tr>
                    <th scope="row" id="'.$results['Id_Producto'].'">'.$results['Id_Producto'].'</th>'.
                    '<td>'.$results['descripcion_producto'].'</td>'.
                    '<td>'.$results['fecha_caducidad'].'</td>'.
                    '<td>'.$results['existencia_producto'].'</td>'.
                    '<td>'.$results['precio_producto'].'</td>'.
                '<td>
                    <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                    <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                    <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
                </tr>';
            }
        }
    }catch(PDOException $e){
        echo "Error: ". $e->getMessage();
    }

    function masSieteDias(){
        $fecha = date('d-m-Y');
        $nuevaFecha = strtotime ( '+7 day' , strtotime ( $fecha ) ) ;
        $nuevaFecha = date ( 'd/m/Y' , $nuevaFecha );

        return $nuevaFecha;
    }

    function actual(){
        $fecha = date('d-m-Y');
        $nuevaFecha = strtotime ( '+1 day' , strtotime ( $fecha ) ) ;
        $nuevaFecha = date ( 'd/m/Y' , $nuevaFecha );

        return $nuevaFecha;
    }
    $conn = null;
?>