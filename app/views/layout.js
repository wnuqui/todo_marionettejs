'use strict';

/*global Marionette:false*/
/*global app:false*/

(function() {
  app.module('TodoApp', function(TodoApp) {
    // View(s)
    // -------

    TodoApp.LayoutView = Marionette.LayoutView.extend({
      template: '#layout-view',

      regions: {
        todoInput: '#todo-input',
        todoList: '#todo-list'
      },

      initialize: function(options) {
        this.todosView = new TodoApp.TodosView({collection: options.collection});
        this.todoInputItemView = new TodoApp.TodoInputItemView();
      },

      onBeforeRender: function() {
        console.log('appLayout -- before:render/onBeforeRender');
      },

      onRender: function() {
        // this.todoList.show(this.todosView);               // one way
        this.showChildView('todoList', this.todosView);      // other way

        // this.todoInput.show(this.todoInputItemView);           // one way
        this.showChildView('todoInput', this.todoInputItemView);  // other way
      }
    });
  });
})();
