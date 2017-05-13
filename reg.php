<?php
	require('config.php');
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
	

$password_selector=$conn->query("SELECT password FROM login WHERE email='$email'");
$rowcount=mysqli_num_rows($password_selector);
if($rowcount > 0)
{
	
	$password_row = mysqli_fetch_row($password_selector);
	$temp=$password_row[0];
	$bool=password_verify($password , $temp);
	if($bool){
		$result=$conn->query("SELECT id,firstname,lastname,email FROM login WHERE email='$email'");
		$row = mysqli_fetch_row($result);
		$res=json_encode($row);
		echo $res;
	}
	
}
else{
	echo "n";
}

?>
