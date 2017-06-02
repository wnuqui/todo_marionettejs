'use strict';

/*global casper*/

casper.test.begin('List Todos', 2, function suite(test) {
  casper.start('http://localhost:3333', function() {
    test.assertTitle('Todo App', 'homepage title is the one expected');
    test.assertExists('div#todo-list', 'todo list is found');
  });

  casper.run(function() {
    test.done();
  });
});
