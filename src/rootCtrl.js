angular.module( 'emporium' )
.controller( 'rootCtrl', function( $scope, itemService, itemFactory ) {
	console.log( 'rootCtrl instantiated' );
	$scope.formShow = false;

	$scope.getItems = function() {
		console.log( 'rootCtrl, get items' );
		$scope.items = itemService.getItems();
	}
	$scope.getItems();

	$scope.addItem = function( newItem ) {
		console.log( 'rootCtrl addItem' );
		itemService.addItem( newItem );

		$scope.getItems();
		$scope.formShow = false;
	};

});