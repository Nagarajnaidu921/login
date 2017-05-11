<?php 
$postdata = file_get_contents("php://input");
$received_data= json_decode($postdata);
$firstname = $received_data->firstname;
$lastname = $received_data->lastname;
$email = $received_data->email;
$password = $received_data->password;
$conn = new mysqli("localhost", "root", "root", "mydb");
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$temp = password_hash($password , PASSWORD_BCRYPT);
$sql = "INSERT INTO login(id,firstname,lastname,email,password)VALUES(NULL,'$firstname','$lastname','$email','$temp')";
if(mysqli_query($conn , $sql))
{
	echo "success";
}
else{
	echo "failed";
}
?>