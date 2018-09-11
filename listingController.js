angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    var searchIndex = "";

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

     //adds entry to listing
    $scope.addListing = function() {

      //fills out the components for the new List
      var newList = {
        "code": $scope.addCode,
        "name": $scope.addName,
        "coordinates": {
          "latitude": $scope.addLat,
          "longitude": $scope.addLong
        },
        "address": $scope.addAddress + ", United States",
      }
      $scope.listings.push(newList);
    };

    //deletes an entry in listing
    $scope.deleteListing = function(index) {
      //locates the index of the entry and deletes it
      $scope.listings.splice(index, 1);
    };

    //displays detail of specific eentry
    $scope.showDetails = function(code) {
      var newIndex;
      var i;
      for(i = 0; i < $scope.listings.length; i++) {
        $scope.temp = $scope.listings[i];
        if($scope.temp.code === code)
        newIndex = i;
}
            $scope.detailedInfo = $scope.listings[newIndex];


    };

    //custom filter that searches for code or building name
     $scope.searchFilterCustom = function(entry) {

	 	{
	 		if(typeof $scope.filterText == 'undefined')
	 		{
	 			return entry;
	 		}

	 		if(entry.name.includes($scope.filterText) || entry.code.includes($scope.filterText))
	 		{
	 			return entry;
	 		}
	 	}
	 };
  }
]);
