// pull in angular
var myApp=angular.module( 'myApp', [] );
console.log('script src');

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
  $scope.addRecord = function(){
    console.log('in addRecord');
    event.preventDefault();
    var objectToSend ={
      name: $scope.nameIn,
      location: $scope.locationIn,
    };
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    });
    $scope.nameIn ='';
    $scope.locationIn='';
  };
  $scope.getRecords = function(){
    console.log('in getRecords');
    // $.http({
    //   method: 'GET',
    //   url: '/getRecords',
    // }).then( function( response ){
    //   $scope.allTheRecords = response;
    //   console.log( $scope.allTheRecords );
    // }), function myError( response ){
    //   console.log( response.statusText );
    // };
  };
}]);
