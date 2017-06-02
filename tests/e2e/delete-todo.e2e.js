'use strict';

/*global casper*/

casper.test.begin('Delete Todo', 4, function suite(test) {
  casper.start('http://localhost:3333', function() {
    this.mouse.move('#todo-list > ul > li:nth-child(1)');
    test.assertExists('li:hover > a.delete-todo', 'li is found');
  });

  casper.then(function() {
    this.click('#todo-list > ul > li:nth-child(1) > a');
    test.assertElementCount('div#todo-list > ul li', 2);
  });

  casper.then(function() {
    this.mouse.move('#todo-list > ul > li:nth-child(1)');
    test.assertExists('li:hover > a.delete-todo', 'li is found');
  });

  casper.then(function() {
    this.click('#todo-list > ul > li:nth-child(1) > a');
    test.assertElementCount('div#todo-list > ul li', 1);
  });

  casper.run(function() {
    test.done();
  });
});
