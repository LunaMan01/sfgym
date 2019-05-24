<?php

$nombreRespaldo = "acropolisgym-".date('Ymd-His').".sql";

// $comando = "..\..\..\mysql\bin mysqldump --user=".$user_name." --password=".$pass." --host=localhost acropolisgymweb > $nombreRespaldo";
$command = "mysqldump --opt -h localhost -u root --password=  nuevoacropolisgym > $nombreRespaldo";
// echo $comando;
system($command);

header('Content-Description: File Transfer');
header('Content-Type: application/sql');
header('Content-Disposition: attachment; filename="'.basename($nombreRespaldo).'"');
readfile("$nombreRespaldo");


// echo file_get_contents("$nombreRespaldo")

unlink($nombreRespaldo);
?>