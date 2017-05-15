'use strict';

(function() {
    /* 
     * Space Should Be Given After Function key Word..
     * Should Write Like This function () {} 
     */

    var app = angular.module('myapp', []);

    /*
     * Login Controller
     */

    app.controller('login', function($scope, $http) {
        $scope.login = function() {
            var userData = {
                email: $scope.email,
                password: $scope.password
            };

            $http.post('reg.php', userData)
                .then(function(res) {
                    if (res.data != 'n') {
                        $scope.successMsg = res.data;
                    } else if (res.data == 'n') {
                        $scope.errorMsg = 'username and password mismatch';
                    }
                })
        }
    });


    /*
     * SignUp Controller.. Controller
     */

    app.controller('signup', function($scope, $http) {

        $scope.signUp = function() {

            /*
             * Form Values..
             */
            var firstName = $scope.firstname;
            var lastName = $scope.lastname;
            var email = $scope.email;
            var password = $scope.password;
            var rPassword = $scope.rpassword;

            /*
             * Password Validation Requirements..
             */
            var isPasswordsSame = password === rPassword;
            var isPassLengthOk = password.length >= 8;

            if (isPasswordsSame && isPassLengthOk) {

                var userData = {
                	// Data Which We Are Going To Send To Server.. Which Will Process Data And Produce Output..
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    password: password
                };

                $http.post('signup.php', userData)
                    .then(function(res) {
                        var data = res.data;
                        if (data == 'success') {
                            window.location.href = 'index.html';
                        } else {
                            $scope.errorMsg = 'email id already associated with some other account';
                        }
                    })
            } else if (!isPasswordsSame) {
                $scope.errorMsg = 'Passwords Should Be Same';
            } else if (!isPassLengthOk) {
                $scope.errorMsg = 'Minimum Password Length Should Be Atleast 8';
            }
        }

    });
})();
