'use strict';

/*global app:false*/

(function() {

  app.module('TodoApp', function(TodoApp) {
    // Collection(s)
    // ------------

    TodoApp.Todos = Backbone.Collection.extend({
      model: TodoApp.Todo,
      comparator: 'gid' // used in sorting and by default no comparator is defined
    });

  });
})();
