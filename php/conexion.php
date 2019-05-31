<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    
    try {
      date_default_timezone_set('America/Mexico_City');

      $conn = new PDO("mysql:host=$servername;dbname=acropolisgym", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
      echo "Connection failed: " . $e->getMessage();
    }
?> 
