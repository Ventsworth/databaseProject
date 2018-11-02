angular.module('dbApp', ['ngMaterial']).controller('signInCtrl', function($scope, $mdDialog) {
    //login data
    $scope.userData = {};
    $scope.userData.username = '';
    $scope.userData.password = '';

    //sign up data
    $scope.universities = [{name: 'UCF', code: '1'}, {name: 'Valencia', code: '2'}]; //to be replaced later when DB call works
    $scope.signUpData = {};
    $scope.signUpData.email = '';
    $scope.signUpData.password = '';
    $scope.signUpData.universityID = 0;
    $scope.signUpToggle = false;


    $scope.login = function(){
        //send userData to database, if valid user, get permissions and go to next page
    }
    $scope.signUpFunc = function(){
        $scope.signUpToggle = true;
        console.log("hit");
        if($scope.signUpData.uni != 0 && $scope.signUpData.email != '' && $scope.signUpData.password != ''){
            //submit new user to db here
            console.log("creating new user account:");
            console.log($scope.signUpData);
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
