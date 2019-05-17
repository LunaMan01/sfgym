<?php
include 'conexion.php';

if ($conn->connect_errno) {
    echo "Fallo al conectar MySQL";
    exit();
}



$user_name = $_POST['user-name'];
$pass = $_POST['user-pass'];
$conn->query('use mysql');
$query = "SELECT user from user where user like '".$user_name."'";
$resultado = $conn->query($query);

$count = mysqli_num_rows($resultado);
if($count > 0){
    echo 0;
    exit;
}
else {
    $conn->query('use nuevoacropolisgym');
}

if(!empty($_POST["user-name"])) {
        $query = "CREATE user '".$user_name."'@'localhost' identified by '".$pass."'";
        $resultado = $conn->query($query);    
}

$queryPrivilegios = "GRANT ";

if(isset($_POST['todos-privilegios'])){
    $queryPrivilegios .= 'ALL PRIVILEGES';
}
// else if(isset($_POST['privilegios'])) {
else{
    $privi = $_POST['privilegios'];
    foreach($privi as $privilegio) {
        $queryPrivilegios .= $privilegio.",";       
    }
}

$queryPrivilegios = trim($queryPrivilegios, ',');
$queryPrivilegios .= ' ON ';
if(isset($_POST['todas-tablas'])) {
    $queryPrivilegios .= "acropolisgymweb.* to '".$user_name."'@'localhost'";
    $resultado = $conn->query($queryPrivilegios);
}
else if(isset($_POST['tablas'])) {
    $tablas = $_POST['tablas'];
    foreach($tablas as $tabla) {
        $toTables = "acropolisgymweb.".$tabla." to '".$user_name."'@'localhost'"; 
        $resultado = $conn->query($queryPrivilegios.$toTables);
    }
}
$conn->query("FLUSH PRIVILEGES");
echo 1;
?>