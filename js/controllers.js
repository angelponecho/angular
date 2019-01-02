angular.module("FinalApp")
.controller("MainController", function ($scope, $resource, PostResource) {
  User=$resource('https://jsonplaceholder.typicode.com/users/:id',{id: "@id"});
  $scope.posts= PostResource.query();
  $scope.users= User.query();
  $scope.removePost =function(post){
        PostResource.delete({id: post.id},function(data){
     })
    $scope.post = $scope.post.filter(function(element){
      return element.id!==post.id;
    })
  }

})

  .controller("PostController", function ($scope,PostResource, $routeParams,$location) {
    $scope.title='editar post';
    $scope.posts= PostResource.get({id: $routeParams.id});
    $scope.savePost =function(){
      PostResource.save({id:$scope.post.id},{data:$scope.post}, function (data) {
        $location.path("/post"+$scope.post.id)

      })
    }
  })
  .controller("NewPostController", function ($scope,PostResource,$location) {
    $scope.posts= {};
    $scope.title= 'Crear post';
    $scope.savePost =function(){
      PostResource.save({data:$scope.post},function (data) {
        $location.path("/")

      })
    }
  })