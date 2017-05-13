<?php
	require('config.php');
	$postdata = file_get_contents("php://input");
	$received_data= json_decode($postdata);
	$firstname = $received_data->firstname;
	$lastname = $received_data->lastname;
	$email = $received_data->email;
	$password = $received_data->password;
	$temp = password_hash($password , PASSWORD_BCRYPT);
	$sql = "INSERT INTO login(id,firstname,lastname,email,password)VALUES(NULL,'$firstname','$lastname','$email','$temp')";
	if($conn->query($sql))
	{
		echo "success";
	}
	else{
		echo "failed";
	}
?>