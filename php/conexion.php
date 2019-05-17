<?php
    // $servername = "localhost";
    // $username = "luna";
    // $password = "luna";
    
    try {
      session_start();

      date_default_timezone_set('America/Mexico_City');

      $conn = new PDO("mysql:host=localhost;dbname=nuevoacropolisgym", $_SESSION['user'], $_SESSION['pass']);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
      echo "Connection failed: " . $e->getMessage();
    }
?> 
