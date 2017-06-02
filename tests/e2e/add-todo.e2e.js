'use strict';

/*global casper*/

casper.test.begin('Add Todo', 6, function suite(test) {
  casper.start('http://localhost:3333', function() {
    test.assertExists('input[id="todo"]', 'input is found');
    test.assertExists('button', 'button is found');
  });

  casper.then(function() {
    this.sendKeys('input[id="todo"]', 'Eat');
    this.click('button');
  });

  casper.then(function() {
    test.assertElementCount('div#todo-list > ul li', 4);
    test.assertSelectorHasText('div#todo-list > ul li', 'Eat');
  });

  casper.then(function() {
    this.sendKeys('input[id="todo"]', 'Eat MORE');
    this.click('button');
  });

  casper.then(function() {
    test.assertElementCount('div#todo-list > ul li', 5);
    test.assertSelectorHasText('div#todo-list > ul li', 'Eat MORE');
  });

  casper.run(function() {
    test.done();
  });
});
