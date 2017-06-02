'use strict';

/*global util:false*/
/*global app:false*/

(function() {

  app.module('TodoApp', function(TodoApp) {
    // Model(s)
    // --------

    TodoApp.Todo = Backbone.Model.extend({
      defaults: {
        title: 'Todo!'
      },

      initialize: function() {
        this.set('gid', util.generateGID());
        this.set('status', TodoApp.invertedStatuses()['New']);
      }
    });
  });
})();
