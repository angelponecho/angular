angular.module("FinalApp")
.controller("MainController", function ($scope, $resource) {

  Post=$resource('http//:jsonplaceholder.typicde/post/:id',{id:@id});
  User=$resource('http//:jsonplaceholder.typicde/post/:id',{id:@id});
  $scope.posts= Post.query();
  $scope.users= User.query();
  
})