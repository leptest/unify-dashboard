function ctrl($scope, $http, $timeout) {

	$scope.reload = function() {
		$http.get('https://unify--api.herokuapp.com/api/referrals/').
		success(function(data) {
			$scope.referrals = data;
		});

		$timeout(function() {
			$scope.reload();
		}, 2000)
	};
	$scope.reload();

}
