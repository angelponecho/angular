angular.module("FinalApp")
.controller("MainController", function ($scope, $resource) {

  Post=$resource('https//:jsonplaceholder.typicode.com/posts/:id',{id: @id});
  User=$resource('https//:jsonplaceholder.typicode.com/users/:id',{id: @id});
  $scope.posts= Post.query();
  $scope.users= User.query();
  $scope.removePost =function(post){
     Post.delete({id: post.id},function(data){
       console.log(data);
     })
    $scope.post = $scope.post.filter(function(element){
      return element.id==post.id;
    })
  }

})

  .controller("PostController", function ($scope,$resource, $routeParams) {
    Post=$resource('https//:jsonplaceholder.typicode.com/posts/:id',{id:@id});
    $scope.posts= Post.get({id: $routeParams.id});
  })
  .controller("NewPostController", function ($scope,$resource) {
    Post=$resource('https//:jsonplaceholder.typicode.com/posts/:id',{id:@id});
    $scope.posts= {};
    $scope.title= 'Crear post';
    $scope.savePost =function(){
      Post.save({data:$scope.post})
    }
  })