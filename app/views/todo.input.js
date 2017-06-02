'use strict';

/*global Marionette:false*/
/*global app:false*/

(function() {
  app.module('TodoApp', function(TodoApp) {
    // View(s)
    // -------

    TodoApp.TodoInputItemView = Marionette.ItemView.extend({
      template: '#todo-input-item-view',

      ui: {
        todoInput: 'input',
        setTodoButton: 'button'
      },

      events: {
        'keypress @ui.todoInput': 'onUiTodoInputKeyPress',
        'keyup @ui.todoInput': 'onUiTodoInputKeyUp',
        'click @ui.setTodoButton': 'addTodo'
      },

      onUiTodoInputKeyUp: function() {
        var disabled = this.todoInputValue() === '';
        this.ui.setTodoButton.attr( 'disabled', disabled );
      },

      onUiTodoInputKeyPress: function(e) {
        if (e.which === 13) { // ENTER key
          this.addTodo();
        }
      },

      addTodo: function() {
        var todo = new TodoApp.Todo( {title: this.todoInputValue()} );
        TodoApp.todos.add(todo);
        this.ui.todoInput.val('');
        this.ui.todoInput.focus();
      },

      todoInputValue: function() {
        return this.ui.todoInput.val().trim();
      }
    });
  });
})();
