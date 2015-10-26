describe('todoListController', function() {
  beforeEach(module('todoList'));

  var ctrl;
  var $scope;

  beforeEach(inject(function($controller) {
    $scope = {};
    ctrl = $controller('todoListController', {$scope: $scope});
  }));

  it('initialises with an empty todo list', function() {
    expect($scope.todoStore.length).toEqual(0);
  });

  it('user can add items to list', function() {
    $scope.addTodo('bananas');
    expect($scope.todoStore.length).toEqual(1);
  });

  it('user can remove items from list', function() {
    $scope.addTodo('bananas');
    $scope.removeTodo(0);
    expect($scope.todoStore.length).toEqual(0);
  });
});
