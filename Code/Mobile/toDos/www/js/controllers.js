angular.module('App.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        //$scope.status = "It works!";
		setTimeout(function(){
			window.location="#/login"
		},3000);
    }])
	.controller('loginCtrl', ['$scope', function ($scope) {
		var users = [{id:1, firstName:'Dhammika', lastName:'Gunaratne', username:'dhammika', password:'123'},
					{id:2, firstName:'Roshini', lastName:'Gunaratne', username:'roshini', password:'123'},
					{id:3, firstName:'Isuru', lastName:'Tishamal', username:'isuru', password:'123'},
					{id:4, firstName:'Daratha', lastName:'Galkissa', username:'daratha', password:'123'},
					{id:5, firstName:'Kanchana', lastName:'Galkissa', username:'kanchana', password:'123'}
		]
		$scope.login = function(){
			for(i=0; users.length > i; i++){
				if(users[i].username == $scope.newUser.username && users[i].password == $scope.newUser.password){
					window.location="#/list";
					return false;
				}else{
					//window.location="#/login";
					//alert('Please check username and password...!')
				}
			}
		}
    }])
	.controller('editCtrl', ['$scope', function ($scope) {
		$scope.goToList = function(){
			window.location="#/list";
		}
		
		$scope.back = function(){
			window.location="#/list";
		}
    }])
	.controller('newCtrl', ['$scope', function ($scope) {
		$scope.goToList = function(){
			window.location="#/list";
		}
    }])
    .controller('listCtrl', ['$scope', function ($scope) {
        //$scope.status = "Also totally works!";
		
		$scope.goToNew = function(){
			window.location="#/new";
		}
		
		$scope.goToView = function(){
			window.location="#/edit";
		}
    }]);
