'use strict';

/*global app:false*/

(function() {

  app.module('TodoApp', function(TodoApp) {
    // Public data and functions
    // --------------------


    TodoApp.populateInitialTodos = false;

    TodoApp.setInitialTodos = function() {
      // Set initial todos
      this.todos.add(new app.TodoApp.Todo({title: 'Eat'}));
      this.todos.add(new app.TodoApp.Todo({title: 'Watch'}));
      this.todos.add(new app.TodoApp.Todo({title: 'Sleep'}));
    };


    // Module Initializer(s)
    // --------------------

    TodoApp.addInitializer(function() {
      app.addModule(TodoApp);

      this.todos = new app.TodoApp.Todos();

      if(TodoApp.populateInitialTodos) {
        TodoApp.setInitialTodos();
      }
    });
  });

  app.start();
})();
