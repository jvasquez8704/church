/**
 * Created by i7 on 21/03/2017.
 */
angular.module("AppChurch", ['LocalStorageModule','ngRoute'])
.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller:'loginController',
                templateUrl:'js/framework/view/home.html'
            })
            .when('/login',{
                controller:'loginController',
                templateUrl:'js/framework/view/login.html'
            })
            .when('/signin',{
                controller:'loginController',
                templateUrl:'js/framework/view/signin.html'
            })
            .when('/home',{
                controller:'loginController',
                templateUrl:'js/framework/view/home.html'
            })
            .when('/todolist',{
                controller:'todoController',
                templateUrl:'js/framework/view/todolist.html'
            })
    })
    .controller("loginController", function ($scope, localStorageService) {

    });