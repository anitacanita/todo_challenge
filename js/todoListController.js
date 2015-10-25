app.controller('todoListController', function($scope) {

  $scope.todoStore = [];

  $scope.addTodo = function() {
    $scope.todoStore.push($scope.todo);
    $scope.todo = '';

  };

});
