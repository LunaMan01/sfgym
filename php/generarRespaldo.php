<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'nuevoacropolisgym';
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
$backupAlert = '';
$tables = array();
$result = mysqli_query($connection, "SHOW TABLES");
if (!$result) {
    $backupAlert = 'Error found.<br/>ERROR : ' . mysqli_error($connection) . 'ERROR NO :' . mysqli_errno($connection);
} else {
    while ($row = mysqli_fetch_row($result)) {
        $tables[] = $row[0];
    }
    mysqli_free_result($result);

    $return = "/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    /*!40101 SET NAMES utf8 */;
    /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
    /*!40103 SET TIME_ZONE='+00:00' */;
    /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
    /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
    /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
    /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;\n\n\n";
    foreach ($tables as $table) {

        $result = mysqli_query($connection, "SELECT * FROM " . $table);
        if (!$result) {
            $backupAlert = 'Error found.<br/>ERROR : ' . mysqli_error($connection) . 'ERROR NO :' . mysqli_errno($connection);
        } else {
            $num_fields = mysqli_num_fields($result);
            if (!$num_fields) {
                $backupAlert = 'Error found.<br/>ERROR : ' . mysqli_error($connection) . 'ERROR NO :' . mysqli_errno($connection);
            } else {
                $return .= "\n\nDROP TABLE IF EXISTS `" . $table . "`;\n";
                $return .= '/*!40101 SET @saved_cs_client = @@character_set_client */;
                /*!40101 SET character_set_client = utf8 */;';
                

                $row2 = mysqli_fetch_row(mysqli_query($connection, 'SHOW CREATE TABLE ' . $table));
                 
                if (!$row2) {
                    $backupAlert = 'Error found.<br/>ERROR : ' . mysqli_error($connection) . 'ERROR NO :' . mysqli_errno($connection);
                } else {
                    
                    $return .= "\n\n" . $row2[1] . ";\n\n";
                    $return .= "\n/*!40101 SET character_set_client = @saved_cs_client */;";
                    $return .= 'LOCK TABLES `' .$table. "` WRITE;\n
                    /*!40000 ALTER TABLE `".$table."` DISABLE KEYS */;\n";
                    for ($i = 0; $i < $num_fields; $i++) {
                        while ($row = mysqli_fetch_row($result)) {
                            $return .= 'INSERT INTO ' . $table . ' VALUES(';
                            for ($j = 0; $j < $num_fields; $j++) {
                                $row[$j] = addslashes($row[$j]);
                                if (isset($row[$j])) {
                                    $return .= '"' . $row[$j] . '"';
                                } else {
                                    $return .= '""';
                                }
                                if ($j < $num_fields - 1) {
                                    $return .= ',';
                                }
                            }
                            $return .= ");\n";
                        }
                    }
                    $return .= "\n\n\n";
                    $return .= "/*!40000 ALTER TABLE `".$table."` ENABLE KEYS */;\nUNLOCK TABLES;";     
                }
                $backup_file = $dbname . date("Y-m-d-H-i-s") . '.sql';
                $handle = fopen("{$backup_file}", 'w+');
                fwrite($handle, $return);
                fclose($handle);     
            }   
        }  
    }
    header('Content-Description: File Transfer');
    header('Content-Type: application/sql');
    header('Content-Disposition: attachment; filename="'.basename($backup_file).'"');
    readfile("$backup_file");

    unlink($backup_file);
 }
?>


































