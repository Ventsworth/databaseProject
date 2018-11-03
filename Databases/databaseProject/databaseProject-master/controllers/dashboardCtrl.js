angular.module('dbApp', ['ngMaterial']).controller('DashboardCtrl', function($scope, $mdDialog) {
    $scope.createEventToggle = false;
    $scope.createRSOToggle = false;
    //creating new event
    $scope.event = {};
    $scope.event.name = '';
    $scope.event.startTime = '';
    $scope.event.endTime = '';
    $scope.event.description = '';
    $scope.event.cat = 0;
    $scope.event.location = 0;
    //creating new RSO
    $scope.rso = {};
    $scope.rso.name = '';
    $scope.addMember = '';
    $scope.foundingMembers = [];
    //searching
    $scope.searchResults = [];
    $scope.searchParam = '';
    $scope.searchCat = '';
    $scope.userData = {};
    $scope.userData.userID = '11223';
    $scope.userData.admin = true;

    $scope.rsoArrayPush = function(){
        $scope.foundingMembers.push($scope.addMember);
        $scope.addMember = '';
    }
    $scope.search = function(){
        //package for db
        if($scope.searchCat == '0'){
            //public event
        }
        if($scope.searchCat == '1'){
            //private event
        }
        if($scope.searchCat == '2'){
            //rso event
        }
        if($scope.searchCat == '3'){
            //rso org
            //push this up to a service?
        }
    }
    $scope.createEvent = function(){
        //gather info and send to db
        $scope.createEventToggle = true;
        $scope.createRSOToggle = false;
    }
    $scope.createRSO = function(){
        //form with 5 users
        $scope.createRSOToggle = true;
        $scope.createEventToggle = false;
    }
    $scope.goto = function(key){
        if(key == 'search'){
            window.location.href="searchEngine.html"
        }
        if(key == 'myEvents'){
            window.location.href="myEvents.html"
        }
        if(key == 'myRSOs'){
            window.location.href="myRSOs.html"
        }
    }
    $scope.logout = function(){
        //clear out user info 
        window.location.href="signIn.html"
    }
});