angular.module('dbApp', ['ngMaterial']).controller('signInCtrl', function($scope) {
    $scope.username = '';
    $scope.password = '';
    $scope.invalidLogin = false;
    $scope.login = function(){
        if($scope.username == 'stduser' && $scope.password == 'stduser'){
            $scope.invalidLogin = false;
            window.location.href="dashboard.html"
        }
        else if($scope.username == 'admin' && $scope.password == 'admin'){
            $scope.invalidLogin = false;
            window.location.href="dashboard.html"
        }
        else{
            $scope.invalidLogin = true;
        }
    }

    $scope.goto = function(dest){
        if(dest == ''){
            window.location.href="signIn.html";
        }
        else if(dest == ''){
            window.location.href="page2.html";
        }
        else
            console.log("That shouldn't work");

    }
});