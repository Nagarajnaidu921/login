var app = angular.module("myapp",[]);
app.controller("login",($scope , $http , $templateCache)=>{
	$scope.login=()=>{
		$http({
			method:'POST',
			url:'reg.php',
			data:{email : $scope.email, password : $scope.password},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
            cache: $templateCache
		}).then((res)=>{
			if(res.data !="n")
			{
				$scope.successMsg=res.data;	
			}
			else if(res.data == "n" ){
				$scope.errorMsg="username and password mismatch";
			}
		})
	}
});



app.controller("signup",function($scope , $http , $templateCache){
	
	$scope.Signup=()=>{
		if(($scope.password==$scope.rpassword)){
			if($scope.password.length>8){
				$http({
					method:'POST',
					url:'signup.php',
					data:{firstname:$scope.firstname,lastname:$scope.lastname , email:$scope.email , password:$scope.password},
					headers:{'Content-Type': 'application/x-www-form-urlencoded'},
					cache:$templateCache
				}).then((res)=>{
					if(res.data=="success")
					{
						window.location.href="index.html";
					}else{
						$scope.errorMsg="email id already associated with some other account";
					}
				})
			}
			else{
				$scope.errorMsg="password should have atleast 8 characters";
			}
		}
		else{

			$scope.errorMsg="password field are not matching";
		}
	}
	
	
});