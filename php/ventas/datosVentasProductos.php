<?php 
    include '../conexion.php';

    try{
       
        getDatos($conn);

        
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }

    function getDatos($conn){
        $datos = $conn->prepare("SELECT Productos.Id_Producto, descripcion_producto, total_venta, cantidad_producto, precio_producto
        FROM VentasProductos, Productos WHERE Id_Venta = ". $_POST['id-venta']." AND Productos.Id_Producto = VentasProductos.Id_Producto");
        
        

        $datos->execute();
        
        while($r = $datos->fetch()){
               echo '<tr>
                        <th scope="row" class="carrito-u" data-cantidad="'.$r['cantidad_producto'].'" data-subtotal="'.$r['total_venta'].'" id="'.$r['Id_Producto'].'">'.$r['Id_Producto'].'</th>'.
                        '<td>'.$r['descripcion_producto'].'</td>'.
                        '<td class="subtotales">'.$r['total_venta'].'</td>'.
                        '<td data-precio="'.$r['precio_producto'].'">'.$r['cantidad_producto'].'</td>'.
                        '<td>
                            
                            <i class="material-icons actions detalle edit-action mr-2" data-toggle="modal" href="#modificar-cantidad-producto-modal"> create</i>
                            <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-producto-modal"> delete</i> </td>
                    </tr>';
            }

            
    }
    $conn = null;
?>