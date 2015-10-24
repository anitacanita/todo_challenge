describe('todoListController', function() {
  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoListController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.todos.length).toEqual(0);
  });
});
