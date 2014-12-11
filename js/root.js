/* Here I'm telling Angular to create a new module, called 'root'*/
angular.module("root", [])
	/*Inside my module, I'm going to create a controller, and inject the $scope variable*/
	.controller("index", ["$scope", function($scope){

		/*Create a new varible in the $scope. This variable is going to be binded in the page index.html*/
		$scope.message = "Hello freaking AngularJS! Let's play...";

		/*This variables will be binded in the form fields. Very cool!*/
		$scope.favoriteWord;
		$scope.favoriteColor = "red";
		$scope.favoriteShape = "Circle";

		/*Now I create the cool functions, to give some color to my page*/
		$scope.isRed = function () {
			return $scope.favoriteColor === "red";
		};

		$scope.isGreen = function () {
			return $scope.favoriteColor === "green";
		};

		$scope.isYellow = function () {
			return $scope.favoriteColor === "yellow";
		};

		$scope.isBlue = function () {
			return $scope.favoriteColor === "blue";
		};

	}]);