app.controller('todoListController', function($scope) {

  $scope.todoStore = [];

  $scope.addTodo = function() {
    $scope.todoStore.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function(index) {
    $scope.todoStore.splice(index, 1);
  };

});
