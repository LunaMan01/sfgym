<?php 
    include '../conexion.php';

    $fechaActual = actual();

    $fechaSiguiente = masSieteDias();

    try{
        $consultar = "SELECT Id_Producto, descripcion_producto, fecha_caducidad, existencia_producto, precio_producto 
        FROM productos WHERE str_to_date(fecha_caducidad, '%d/%m/%Y') 
        BETWEEN str_to_date('".$fechaActual."', '%d/%m/%Y') AND str_to_date('".$fechaSiguiente."', '%d/%m/%Y')";

        foreach($conn->query($consultar) as $row){
            echo '<tr>
                <th scope="row" id="'.$row['Id_Producto'].'">'.$row['Id_Producto'].'</th>'.
                '<td>'.$row['descripcion_producto'].'</td>'.
                '<td>'.$row['fecha_caducidad'].'</td>'.
                '<td>'.$row['existencia_producto'].'</td>'.
                '<td>'.$row['precio_producto'].'</td>'.
            '<td>
                <i class="material-icons actions watch-action mr-2" data-toggle="modal" href="#ver-producto-modal"> remove_red_eye</i>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-producto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
            </tr>';
        }
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
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