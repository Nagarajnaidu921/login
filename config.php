<?php 
$db_server="localhost";
$db_user="root";
$db_password="root";
$db="mydb";
$conn = new mysqli($db_server,$db_user,$db_password,$db);
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $sql  = 'SHOW CREATE TABLE login';
// $s=$conn->query($sql);
// 	$p = mysqli_fetch_row($s);
// echo $p[1];
?>