function ctrl($scope, $http, $timeout) {

	$scope.reload = function() {
		$http
			.get('https://unify--api.herokuapp.com/api/referrals/')

			.success(function(data) {
				$scope.referrals = data;
			});

		$timeout(function() {
			$scope.reload();
		}, 2000)
	};
	$scope.reload();

}

// var clearReferrals = function() {
// 	console.log('clearReferrals()');
// 	$.ajax({
// 		url: 'https://unify--api.herokuapp.com/api/referrals/',
// 		type: 'DELETE',
// 		success: function(result) {
// 			console.log(result);
// 		}
// 	});
// }

// var populateReferrals = function() {
// 	console.log('populateReferrals()');
// 	// Referrals
// 	$.ajax({
// 		type: 'POST',
// 		url: 'https://unify--api.herokuapp.com/api/referrals/',
// 		data: {
// 			"fromID": "2",
// 			"toID": "1",
// 			"merchantID": "1",
// 			"points": "15",
// 			"status": "active"
// 		},
// 		success: function(result) {
// 			console.log(result);
// 		},
// 		dataType: json
// 	});
// }

// $(function() {
// 	$('.js-clear').on('click', clearReferrals);
// 	$('.js-populate').on('click', populateReferrals);
// });
