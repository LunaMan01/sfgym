<?php
    include '../conexion.php';
    $conex = $conn;
    $array = array();
    try {
        $idC = $_POST["id"];
        $preparar = 'SELECT nombre_cliente, apellido_paterno, apellido_materno, edad, numero, colonia, calle, numero_exterior, numero_interior FROM Clientes, Telefonos, Direcciones where Clientes.Id_Cliente = '.$_POST['id'].' and Telefonos.Id_Cliente = '.$_POST['id'].' and Direcciones.Id_Cliente = '.$_POST['id'];
        $cliente = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $cliente->nombre = $row['nombre_cliente'];
            $cliente->apPaterno = $row['apellido_paterno'];
            $cliente->apMaterno = $row['apellido_materno'];
            $cliente->edad = $row['edad'];
            $cliente->numero = $row['numero'];
            $cliente->colonia = $row['colonia'];
            $cliente->calle = $row['calle'];
            $cliente->numeroExterior = $row['numero_exterior'];
            $cliente->numeroInterior = $row['numero_interior'];
            
            // $cliente->genero = $row['genero'];
        }
        
        $clienteJSON = json_encode($cliente);
       echo $clienteJSON;
    }   
    catch(PDOException $e){
        echo "Error: ". $e->getMessage();
     
    }
    $conn = null;
?>
<!-- $consulta = $conn->prepare('SELECT Clientes.Id_Cliente, nombre_cliente, apellido_paterno, numero 
        FROM Clientes, Telefonos WHERE Clientes.Id_Cliente ='. $_POST['id'] .'AND Telefonos.Id_Cliente ='. $_POST['id']);

        $consulta->execute();
        $resultado = $consulta->fetchAll();

        foreach($resultado as $res){
            echo "<tr>";
            echo "<td>".$res[""]."</td>";
            echo "<td>".$res[""]."</td>";
            echo "<td>".$res[""]."</td>";
            echo "<td>".$res[""]."</td>";
            echo "</tr>";
        } -->