angular.module("FinalApp")
.controller("MainController", function ($scope, $resource) {

  Post=$resource('http//:jsonplaceholder.typicode/post/:id',{id: @id});
  User=$resource('http//:jsonplaceholder.typicode/post/:id',{id: @id});
  $scope.posts= Post.query();
  $scope.users= User.query();
  
})

  .controller("PostController", function ($scope,$resource, $routeParams) {
    Post=$resource('http//:jsonplaceholder.typicode/post/:id',{id:@id});
    $scope.posts= Post.get({id: $routeParams.id});
  })