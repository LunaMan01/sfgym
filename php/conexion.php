<?php
    $servername = "localhost";
    $username = "root";
    $password = "";

    try {
        $conn = mysqli_connect("$servername","$username","$password");
        mysqli_select_db($conn, "nuevoacropolisgym");
        // set the PDO error mode to exception
        // $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
?> 