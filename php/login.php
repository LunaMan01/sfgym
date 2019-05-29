<?php 
    $user = $_POST['usuario'];
    $pass = $_POST['contrase'];

    include 'conexion.php';

    try{
        // $datos = "SELECT nombre_instructor, password1 
        //     FROM Instructores WHERE nombre_instructor = '".$user."' AND password1 = '".$pass."'";
        $u = "";
        $uR = "SELECT Id_Instructor FROM Instructores
            WHERE Id_Instructor LIKE '".$user."'";

        foreach($conn->query($uR) as $row){
            $u = $row['Id_Instructor'];
        }

        $p = "";
        $pR = "SELECT password1 FROM Instructores
            WHERE password1 LIKE '".$pass."'";

        foreach($conn->query($pR) as $row){
            $p = $row['password1'];
        }

        if($user == $u && $pass == $p){
            echo 1;
            // header("Location: ../index.html"); 
        }else{
            echo 'Nl';
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