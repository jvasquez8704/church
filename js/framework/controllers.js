angular.module("AppChurch")
.controller("todoController", function ($scope, localStorageService) {
    if (localStorageService.get('angular-todolist')) {
         $scope.todo = localStorageService.get('angular-todolist');
         } else {
         $scope.todo = [];
         }
         $scope.$watch(function () {
         return $scope.newActv;
         }, function (newValue, oldValue) {
         console.log(newValue);
         console.log(oldValue);
         });
         $scope.$watchCollection('todo', function (newValue, oldValue) {
         localStorageService.set('angular-todolist',$scope.todo);
         });
         $scope.addActv = function () {
         $scope.todo.push($scope.newActv);
         $scope.newActv = {};
         //  localStorageService.set('angular-todolist', $scope.todo);
         }
         $scope.cleanActv = function () {
         $scope.todo = [];
         //  localStorageService.set('angular-todolist', $scope.todo);
         }
});