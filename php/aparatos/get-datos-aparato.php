<?php 
    include '../conexion.php';
    
    $array = array();
    try{
        $preparar = 'SELECT * FROM Aparatos WHERE Id_Aparato = '.$_POST['id-aparato'];
        $aparato = new \stdClass();


        foreach ($conn->query($preparar) as $row) {
            $aparato->idAparato = $row['Id_Aparato'];
            $aparato->nombreAparato = $row['nombre_aparato'];
        }
        
        $aparatoJSON = json_encode($aparato);
       echo $aparatoJSON;
    }catch(PDOException $e){
        echo 'Error: '. $e->getMessage();
    }
    $conn = null;
?>