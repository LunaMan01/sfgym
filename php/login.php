<?php 
    $user = $_POST['usuario'];
    $pass = $_POST['contraseña'];

    include 'conexion.php';

    try{
        // $datos = "SELECT nombre_instructor, password1 
        //     FROM Instructores WHERE nombre_instructor = '".$user."' AND password1 = '".$pass."'";
        $u = "";
        $uR = "SELECT nombre_instructor FROM Instructores
            WHERE nombre_instructor LIKE '".$user."'";

        foreach($conn->query($uR) as $row){
            $u = $row['nombre_instructor'];
        }

        $p = "";
        $pR = "SELECT password1 FROM Instructores
            WHERE password1 LIKE '".$pass."'";

        foreach($conn->query($pR) as $row){
            $p = $row['password1'];
        }

        if($user == $u && $pass == $p){
            echo 'Chingon';
            header("Location: ../index.html"); 
        }else{
            echo 'Nel';
            //$conn = null;
        }
        
        /*foreach($conn->query($datos) as $row){
            echo $row['nombre_instructor'].'\n';
            echo $row['password1'].'\n';
        }*/
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>