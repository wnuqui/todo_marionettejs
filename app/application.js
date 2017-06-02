'use strict';

/*global util:false*/

var app;

(function() {
  var App = Backbone.Marionette.Application.extend({
    regions: {
      appRegion: '#todo-app'
    },

    setLayout: function(layout) {
      this.layout = layout;
    },

    getLayout: function() {
      return this.layout;
    },

    addModule: function(module) {
      if (this.modules === undefined) {
        this.modules = [];
      }
      this.modules.push(module);
    }
  });

  app = new App();


  // Things You Can Perform Here
  // ---------------------------
  //
  //  (1) fetch data
  //  (2) do auth and setup authorization
  //  (3) cache templates
  //  (4) prepare views to be used
  //  (5) detect browser and do necessary actions
  //
  app.on('before:start', function() {
    util.sleep(1000);

    // Set initial todos
    app.TodoApp.populateInitialTodos = true;
  });


  // finally start the app
  app.on('start', function() {
    var todoLayout = new app.TodoApp.LayoutView({collection: app.TodoApp.todos});
    app.setLayout(todoLayout);
    app.appRegion.show(app.getLayout());

    // modules defined
    console.log('todo modules:');
    for(var index in app.modules) {
      console.log(app.modules[index]);
    }
  });
})(window);
