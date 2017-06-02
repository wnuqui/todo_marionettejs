'use strict';

/*global util:false*/
/*global app:false*/

(function() {
  // Module Mixin(s)
  // ------------

  var StatusesMixin = {
    statuses: function() {
      return { 1: 'New', 2: 'In Progress', 3: 'Stopped', 4: 'Done' };
    },

    invertedStatuses: function() {
      return util.invert(this.statuses());
    },

    getIntStatus: function(textStatus) {
      return parseInt(this.invertedStatuses()[textStatus]);
    },

    getTextStatus: function(intStatus) {
      return this.statuses()[intStatus];
    }
  };

  /*global _:false*/
  _.extend(app.TodoApp, StatusesMixin);
})();
