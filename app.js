angular.module("FinalApp",["lumx","ngRoute", "ngResource"])
.config(function ($routeProvider) {
  $routeProvider
    .when("/",{
      controller: "MainController",
      templateUrl: "templates/home.html"
    })
    .when("/post/:id",{
      controller: "PostController",
      templateUrl: "templates/post.html"
    })
    .when("/post/:new",{
      controller: "newPostController",
      templateUrl: "templates/post_form.html"
    })
    .when("/post/edit/:id",{
      controller: "PostController",
      templateUrl: "templates/post_form.html"
  })
});