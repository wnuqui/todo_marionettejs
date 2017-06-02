'use strict';

/*global app:false*/
/*global Marionette:false*/

(function() {
  app.module('TodoApp', function(TodoApp) {
    // View(s)
    // -------

    TodoApp.TodoListItemView = Marionette.ItemView.extend({
      tagName: 'li',

      template: '#todo-item-view',

      ui: {
        todoTitleInput:   'input.todo-title-input',
        deleteLink:       'a.delete-todo',
        setStatusSelect:  'select.set-status'
      },

      events: {
        'dblclick':                     'setEditable',
        'click @ui.deleteLink':         'delete',
        'blur @ui.todoTitleInput':      'setUnEditable',
        'mouseout @ui.todoTitleInput':  'setUnEditable',
        'keypress @ui.todoTitleInput':  'onTodoTitleInputKeyPress',
        'keyup @ui.todoTitleInput':     'onTodoTitleInputKeyUp',
        'change @ui.setStatusSelect':   'onSetStatusSelectChange'
      },

      delete: function() {
        this.remove(); // stopListening() implicitly called on .remove();
        this.model.destroy();
      },

      setEditable: function() {
        // function.apply(valueForThis, arrayArgs)
        this.$el['addClass'].apply(this.$el, ['editable']);
        this.ui.todoTitleInput.select();
      },

      setUnEditable: function() {
        // function.call(valueForThis, explicitArg1, explicitArg2)
        this.$el['removeClass'].call(this.$el, 'editable');
        // always reset to model.title
        this.ui.todoTitleInput.val(this.model.get('title'));
      },

      onTodoTitleInputKeyPress: function(e) {
        if (e.which === 13) { // ENTER key
          var value = this.ui.todoTitleInput.val().trim();
          if (value !== '') {
            if (this.model.get('title') !== value) {
              this.model.set('title', value);
              this.render();
            }
            else {
              this.setUnEditable();
            }
          }
        }
      },

      onTodoTitleInputKeyUp: function(e) {
        if (e.which === 27) { // ESC key
          this.setUnEditable();
        }
      },

      onSetStatusSelectChange: function() {
        this.model.set('status', this.ui.setStatusSelect.val());
        this.render();
      },

      serializeData: function() {
        return {
          title: this.model.get('title'),
          textStatus: TodoApp.getTextStatus(this.model.get('status')),
          status: this.model.get('status')
        };
      }
    });

    TodoApp.TodosView = Marionette.CollectionView.extend({
      tagName: 'ul',
      childView: TodoApp.TodoListItemView
    });
  });
})();
