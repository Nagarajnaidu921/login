var app = angular.module("myapp",[]);
app.controller("login",function($scope , $http , $templateCache){
	$scope.login=function(){
		$http({
			method:'POST',
			url:'reg.php',
			data:{email : $scope.email, password : $scope.password},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
            cache: $templateCache
		}).then(function(res){
			if(res.data !="n")
			{
				$scope.successMsg=res.data;	
			}
			else if(res.data == "n" ){
				$scope.errorMsg="username and password mismatch";
			}
		console.log(res.data);
		})
	}
});
app.controller("signup",function($scope , $http , $templateCache){
	$scope.Signup=function(){
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
				$scope.errorMsg="faild to create account";
			}
		})
		console.log($scope.email);
	}
});