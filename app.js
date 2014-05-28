var app = angular.module('countApp', []);

app.controller('CountCtrl', function ($scope) {

	var store = window.localStorage;

	$scope.today = +new Date;
	$scope.target = 1500;
	$scope.total = parseInt( store['total'] ) || 0;
	$scope.addAmount = 100;
	check($scope);

	$scope.addToTotal = function() {
		$scope.total += parseInt( $scope.addAmount );
		store['total'] = $scope.total;
		check($scope);
	}

});

function check($scope) {
	$scope.over = parseInt( $scope.total ) > parseInt( $scope.target );
	console.log($scope.over, parseInt( $scope.total ), parseInt( $scope.target ) );
}

app.directive('selectOnClick', function () {
	return function (scope, element, attrs) {
		element.bind('click', function () {
			this.select();
		});
	};
});