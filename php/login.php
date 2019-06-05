<?php 
    $user = $_POST['usuario'];
    $pass = $_POST['contrase'];

    include 'conexion.php';

    try{
        $consulta = "SELECT nombre_instructor, password1 
            FROM Instructores WHERE Id_Instructor = '".$user."' AND password1 = '".$pass."' LIMIT 1";  

        foreach($conn->query($consulta) as $row){
            echo 1;
            exit;
        }

        if($conn->query($consulta)){  
            echo 0;
        } 

    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>